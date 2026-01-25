import { FormPatient } from "../../components/FormPatient"
import { FormSchedule } from "../../components/FormSchedule"
import { FormDate } from "../../components/FormDate"
import { FormResume } from "../../components/FormResume"


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
            <section><FormResume /></section>
        </form>
    </div>
}