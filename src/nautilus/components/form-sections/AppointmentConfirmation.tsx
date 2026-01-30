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
    return <div className="bg-white p-4 pt-8 pb-8 md:p-10 flex flex-col gap-6 md:gap-6 border border-gray-100 shadow-lg rounded-xl max-w-200 self-center">
        <div className="flex flex-col md:gap-4 gap-3">
            <h1 className="text-3xl md:text-5xl text-center font-semibold">¡Cita agendada con éxito!</h1>
            <p className="text-gray-500 text-center text-xl md:text-2xl leading-relaxed">Tu cita a sido reservada correctamente. Nos comunicaremos con usted para realizar la confirmacion</p>
        </div>
        <div className="flex flex-col gap-3 md:gap-6 p-4 bg-white rounded-md">
            <h2 className="font-semibold md:text-2xl text-xl">DETALLES DE TU CITA</h2>
            <div className="flex gap-3 md:gap-4 items-center">
                <FiCalendar className="bg-[#E6F6FD] p-2 size-12 md:p-4 rounded-xl md:size-20" color="#0DA2E7" />
                <div className="flex flex-col">
                    <h3 className="text-gray-600 md:text-lg">Fecha</h3>
                    <span className="font-semibold md:text-xl">{date}</span>
                </div>
            </div>
            <div className="flex gap-3 md:gap-4 items-center">
                <MdOutlineSchedule size={48} className="bg-[#E6F6FD] p-2 size-12 md:p-4 rounded-xl md:size-20" color="#0DA2E7" />
                <div className="flex flex-col">
                    <h3 className="text-gray-600 md:text-lg">Horario</h3>
                    <span className="font-semibold md:text-xl">{schedule}</span>
                </div>
            </div>
            <div className="flex gap-3 md:gap-4 items-center">
                <FiUser size={48} className="bg-[#E6F6FD] p-2 size-12 md:p-4 rounded-xl md:size-20" color="#0DA2E7" />
                <div className="flex flex-col">
                    <h3 className="text-gray-600 md:text-lg">Nombre</h3>
                    <span className="font-semibold md:text-xl">{name}</span>
                </div>
            </div>
            <div className="flex gap-3 md:gap-4 items-center">
                <FiPhone size={48} className="bg-[#E6F6FD] p-2 size-12 md:p-4 rounded-xl md:size-20" color="#0DA2E7" />
                <div className="flex flex-col">
                    <h3 className="text-gray-600 md:text-lg">Telefono</h3>
                    <span className="font-semibold md:text-xl">{phoneNumber}</span>
                </div>
            </div>
            <div className="flex gap-3 md:gap-4 items-center">
                <GrLocation size={48} className="bg-[#E6F6FD] p-2 size-12 md:p-4 rounded-xl md:size-20" color="#0DA2E7" />
                <div className="flex flex-col">
                    <h3 className="text-gray-600 md:text-lg">Direccion</h3>
                    <span className="font-semibold md:text-xl">{address}</span>
                </div>
            </div>

        </div>
        <Link to='/' className="w-full p-3 text-[18px] text-center rounded-xl md:text-2xl font-semibold text-white bg-[#16B3DE] md:p-5 hover:scale-105 transition-all">Volver al inicio</Link>
    </div>
}