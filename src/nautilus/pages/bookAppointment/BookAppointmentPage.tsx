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
import { registerAppointment } from "../../actions/register-appointment"
import toast from "react-hot-toast";
import { AppointmentConfirmation } from "../../components/form-sections/AppointmentConfirmation"

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


    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (data: any) => {
        try {
            console.log(data)
            setIsSubmitting(true)
            await registerAppointment(data)
            toast.success("Cita agendada!");
            setIsCreated(true)
        } catch (error) {
            toast.error("Error al agendar");
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const [schedules, setSchedules] = useState<Schedule[]>([])
    const selectedDate = watch('date');
    const [isLoading, setIsLoading] = useState(true);

    const [isCreated, setIsCreated] = useState(false)
    useEffect(() => {
        if (!selectedDate) return;

        const obtenerData = async () => {
            setIsLoading(true); // Iniciamos carga
            try {
                const schedulesData = await getSchedulesAvalaible('eb7b67b2-24af-4c33-9eab-41ea9cc74f6c', selectedDate);
                setSchedules(schedulesData);
            } finally {
                setIsLoading(false); 
            }
        };

        obtenerData();
    }, [selectedDate]);

    return <div className="flex flex-col gap-8 md:gap-20 p-4 md:p-20 mt-4">

        {
            isCreated
                ? <AppointmentConfirmation date={watch('date')} schedule={watch('schedule')} name={watch('name')} phoneNumber={watch('phoneNumber')} address={watch('address')} />
                : <>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl text-center font-bold md:text-6xl">Agenda tu <span className="text-[#16B3DE]">cita</span></h1>
                        <p className="text-center text-gray-500 text-xl md:text-3xl">Selecciona fecha, horario y completa tus datos</p>
                    </div>

                    <form action="" className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr] gap-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-8">
                            <section><FormDate setValue={setValue} watch={watch} /></section>
                            <section><FormSchedule setValue={setValue} watch={watch} schedules={schedules} isLoading={isLoading} /></section>
                            <section><FormPatient register={register} errors={errors} /></section>
                        </div>
                        <section className="md:sticky md:top-32 md:self-start"><FormResume watch={watch} isValid={isValid} isSubmitting={isSubmitting} /></section>
                    </form>
                </>
        }
    </div>
}

