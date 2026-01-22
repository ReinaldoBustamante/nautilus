import { Link } from "react-router"

export const HomePage = () => {
    return <div className="flex flex-col gap-4">
        <section className="flex flex-col gap-8">
            <h1 className="text-4xl">Tu <span className="text-[#16B3DE]">bienestar auditivo</span> es nuestra prioridad</h1>
            <p className="text-[18px] text-gray-500">
                En Centro Nautilus ofrecemos atención especializada en otorrinolaringología con tecnología de vanguardia y
                un equipo médico altamente calificado.
            </p>
            <Link to={'/agendar'} className="bg-[#10ACDB] p-3 text-white font-semibold rounded-md text-center">Agendar Cita</Link>
        </section>
    </div>
}