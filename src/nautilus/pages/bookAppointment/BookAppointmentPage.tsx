
import { IoCheckmarkCircleSharp } from "react-icons/io5"

import { FormPatient } from "../../components/FormPatient"
import { FormSchedule } from "../../components/FormSchedule"
import { FormDate } from "../../components/FormDate"
import { AiFillCheckCircle } from "react-icons/ai"


export const BookAppointmentPage = () => {
    return <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-center font-semibold">Agenda tu <span className="text-[#16B3DE]">cita</span></h1>
            <p className="text-center text-gray-500 text-[18px]">Selecciona fecha, horario y completa tus datos</p>
        </div>
        <form action="" className="flex flex-col gap-3">
            <section><FormDate /></section>
            <section><FormSchedule /></section>
            <section><FormPatient /></section>
            <div className="bg-white p-4 rounded-md flex flex-col gap-4 border border-gray-300">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <AiFillCheckCircle size={32} className="mt-0.5 text-[#16B3DE]" />
                        <h2 className="text-2xl font-semibold">Resumen de tu cita</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Fecha no seleccionada</span>
                    <span>Horario no seleccionado</span>
                    <p>Total a pagar: $30.000</p>
                </div>
            </div>
        </form>
    </div>
}