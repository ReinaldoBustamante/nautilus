import { Link } from "react-router"

export const Hero = () => {
    return <div className="flex items-center justify-center md:text-center">
        <div className="md:w-240 flex flex-col gap-8 md:items-center md:gap-12">
            <div className="flex flex-col gap-3 md:gap-10">
                <h1 className="text-4xl font-semibold md:text-8xl ">Tu <span className="text-[#16B3DE]">bienestar auditivo</span> es nuestra prioridad</h1>
                <p className="text-[18px] text-gray-500 md:text-2xl">
                    En Centro Nautilus ofrecemos atención especializada en otorrinolaringología con tecnología de vanguardia y
                    un equipo médico altamente calificado.
                </p>
            </div>
            <Link to={'/agendar'} className="md:text-xl md:w-100 md:p-4 bg-[#10ACDB] p-3 text-white font-semibold rounded-md text-center">Agendar Cita</Link>
        </div>
    </div>
}