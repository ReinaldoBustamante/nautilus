import { FiCalendar, FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import type { AppointmentInterface } from "../actions/get-appointment-action";
import { PatientInfo } from "./PatientInfo";

export const AppointmentItem = ({ appointment }: { appointment: AppointmentInterface }) => {

    const generarLinkWaze = (address: string) => {
        if (!address) return "#";
        const addressEncoded = encodeURIComponent(address);
        return `https://waze.com/ul?q=${addressEncoded}&navigate=yes`;
    };

    const [date, schedule] = new Date(appointment.appointment_date).toISOString().split('T')
    const linkWaze = generarLinkWaze(appointment.address_snapshot);
    const { appointment_status: status } = appointment
    const color = {
        'pending': 'bg-[#FEF3C7] text-[#92400E] border border-[#FDE68B] text-xs font-medium',
        'confirmed': 'bg-[#DBEAFE] text-[#1E40C1] border border-[#C4DEFE] text-xs font-medium',
        'cancelled': 'bg-[#FEE2E2] text-[#991B1B] border border-[#FECBCB] text-xs font-medium'
    }
    const statusValue = {
        'pending': 'Pendiente',
        'cancelled': 'Cancelado',
        'confirmed': 'Confirmado'
    }
    return <div key={appointment.id} className="p-4 border-gray-200 shadow-md border rounded-xl flex flex-col gap-4 md:p-8">

        <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold capitalize md:text-3xl">{appointment.patient.name}</h2>
            <span className={`${color[status]} px-4 py-1 rounded-xl md:text-lg`}>{statusValue[status]}</span>
        </div>

        <div className="bg-[#F8FAFC] p-4 rounded-xl flex flex-col gap-4 text-gray-700">
            <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-4">
                <PatientInfo icon={FiPhone} value={`+56 ${appointment.phone_number_snapshot}`}/>
                <PatientInfo icon={FiMail} value={appointment.email_snapshot}/>
                <PatientInfo icon={FiCalendar} value={date}/>
                <PatientInfo icon={FiClock} value={schedule.slice(0, 5)}/>
                <PatientInfo icon={FiMapPin} value={appointment.address_snapshot}/>
            </div>
            {
                appointment.comment ? <p className="p-4 bg-white rounded-xl border border-gray-100"><span className="font-bold">Comentario:</span> {appointment.comment}</p> : ''
            }

        </div>
        <div className="grid grid-cols-2 gap-2 md:flex">
            <a
                href={linkWaze}
                target="_blank"
                rel="noopener noreferrer"
                className="flex md:hidden"
            >
                <button className="p-2 flex-1 font-semibold bg-[#ECFEFF] border-[#A7F3FC] text-[#327490] border rounded-xl">
                    Ver en Waze
                </button>
            </a>
            <button className="p-2 font-semibold bg-[#EFF6FF] border-[#C0DCFE] text-[#1D4ED8] border rounded-xl md:w-40 cursor-pointer hover:scale-105 transition-all">Confirmar</button>
            <button className="p-2 font-semibold bg-[#ECFDF5] border-[#A7F3D0] text-[#04785C] border rounded-xl md:w-40 cursor-pointer hover:scale-105 transition-all">Completar</button>
            <button className="p-2 font-semibold bg-[#FEF2F2] border-[#FECBCB] text-[#BB1C1C] border rounded-xl md:w-40 cursor-pointer hover:scale-105 transition-all">Cancelar</button>
        </div>

    </div>
} 