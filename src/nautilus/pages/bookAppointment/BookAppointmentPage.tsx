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
import { Link } from "react-router"
import toast from "react-hot-toast";
import { FiCalendar, FiPhone, FiUser } from "react-icons/fi"
import { MdOutlineSchedule } from "react-icons/md"
import { GrLocation } from "react-icons/gr"

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
                const schedulesData = await getSchedulesAvalaible('f31e1b4b-8976-4381-971a-1355bb32fd06', selectedDate);
                setSchedules(schedulesData);
            } finally {
                setIsLoading(false); // Finalizamos carga (siempre, aunque falle)
            }
        };

        obtenerData();
    }, [selectedDate]);

    return <div className="flex flex-col gap-8">

        {
            isCreated
                ? <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl text-center">¡Cita agendada con éxito!</h1>
                        <p className="text-gray-500 text-center">Tu cita a sido agendada correctamente. Nos comunicaremos con usted para realizar la confirmacion</p>
                    </div>
                    <div className="resume flex flex-col gap-3 p-4 bg-white rounded-md">
                        <h2 className="font-semibold text-[18px]">DETALLES DE TU CITA</h2>
                        <div className="flex gap-3 items-center">
                            <FiCalendar size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                            <div className="flex flex-col">
                                <h3 className="text-gray-600">Fecha</h3>
                                <span className="font-semibold">{watch('date')}</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <MdOutlineSchedule size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                            <div className="flex flex-col">
                                <h3 className="text-gray-600">Horario</h3>
                                <span className="font-semibold">{watch('schedule')}</span>
                            </div>
                        </div>
                         <div className="flex gap-3 items-center">
                            <FiUser size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                            <div className="flex flex-col">
                                <h3 className="text-gray-600">Nombre</h3>
                                <span className="font-semibold">{watch('name')}</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FiPhone size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                            <div className="flex flex-col">
                                <h3 className="text-gray-600">Telefono</h3>
                                <span className="font-semibold">{watch('phoneNumber')}</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <GrLocation size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                            <div className="flex flex-col">
                                <h3 className="text-gray-600">Direccion</h3>
                                <span className="font-semibold">{watch('address')}</span>
                            </div>
                        </div>
                        
                    </div>
                    <Link to='/' className="w-full p-3 text-[18px] text-center rounded-md text-white bg-[#16B3DE]">Volver al inicio</Link>
                </div>
                : <>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl text-center font-semibold">Agenda tu <span className="text-[#16B3DE]">cita</span></h1>
                        <p className="text-center text-gray-500 text-[18px]">Selecciona fecha, horario y completa tus datos</p>
                    </div>

                    <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                        <section><FormDate setValue={setValue} watch={watch} /></section>
                        <section><FormSchedule setValue={setValue} watch={watch} schedules={schedules} isLoading={isLoading} /></section>
                        <section><FormPatient register={register} errors={errors} /></section>
                        <section><FormResume watch={watch} isValid={isValid} isSubmitting={isSubmitting} /></section>
                    </form>
                </>
        }
    </div>
}

