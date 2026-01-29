import { FiCalendar, FiPhone, FiUser } from "react-icons/fi"
import { GrLocation } from "react-icons/gr"
import { MdOutlineSchedule } from "react-icons/md"
import { Link } from "react-router"


interface AppointmentConfirmationProps {
    date: string
    schedule: string
    name: string
    phoneNumber: string
    address: string
}

export const AppointmentConfirmation = ({date, schedule, name, phoneNumber, address} : AppointmentConfirmationProps) => {
    return <div className="flex flex-col gap-8">
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
                    <span className="font-semibold">{date}</span>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <MdOutlineSchedule size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                <div className="flex flex-col">
                    <h3 className="text-gray-600">Horario</h3>
                    <span className="font-semibold">{schedule}</span>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <FiUser size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                <div className="flex flex-col">
                    <h3 className="text-gray-600">Nombre</h3>
                    <span className="font-semibold">{name}</span>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <FiPhone size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                <div className="flex flex-col">
                    <h3 className="text-gray-600">Telefono</h3>
                    <span className="font-semibold">{phoneNumber}</span>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <GrLocation size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                <div className="flex flex-col">
                    <h3 className="text-gray-600">Direccion</h3>
                    <span className="font-semibold">{address}</span>
                </div>
            </div>

        </div>
        <Link to='/' className="w-full p-3 text-[18px] text-center rounded-md text-white bg-[#16B3DE]">Volver al inicio</Link>
    </div>
}