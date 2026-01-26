import { FormPatient } from "../../components/form-sections/FormPatient"
import { FormSchedule } from "../../components/form-sections/FormSchedule"
import { FormDate } from "../../components/form-sections/FormDate"
import { FormResume } from "../../components/form-sections/FormResume"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { getSchedulesAvalaible } from "../../actions/get-schedules-avalaible"
import { useEffect, useState } from "react"
import type { Schedule } from "../../interfaces/schedule.interface"
import { appointmentSchema } from "../../schemas/appointment.schemas"

export const BookAppointmentPage = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isValid }
    } = useForm({
        resolver: zodResolver(appointmentSchema),
        mode: 'onTouched'
    });

    const onSubmit = (data: any) => {
        console.log(data)
    }

    const [schedules, setSchedules] = useState<Schedule[]>([])
    const selectedDate = watch('date');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!selectedDate) return;

        const obtenerData = async () => {
            setIsLoading(true); // Iniciamos carga
            try {
                const schedulesData = await getSchedulesAvalaible('aea1cf3e-0041-4e5a-bcc9-fd345d194d16', selectedDate);
                setSchedules(schedulesData);
            } finally {
                setIsLoading(false); // Finalizamos carga (siempre, aunque falle)
            }
        };

        obtenerData();
    }, [selectedDate]);

    return <div className="flex flex-col gap-8">

        <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-center font-semibold">Agenda tu <span className="text-[#16B3DE]">cita</span></h1>
            <p className="text-center text-gray-500 text-[18px]">Selecciona fecha, horario y completa tus datos</p>
        </div>

        <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <section><FormDate setValue={setValue} watch={watch} /></section>
            <section><FormSchedule setValue={setValue} watch={watch} schedules={schedules} isLoading={isLoading} /></section>
            <section><FormPatient register={register} errors={errors} /></section>
            <section><FormResume watch={watch} isValid={isValid} /></section>
        </form>
    </div>
}

