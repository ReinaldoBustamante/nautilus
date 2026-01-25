import { AiFillCheckCircle } from "react-icons/ai"
import { IoAlertCircleOutline } from "react-icons/io5"

export const FormResume = () => {
    return <div className="bg-white p-4 rounded-md flex flex-col gap-4 border border-gray-300">
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                <AiFillCheckCircle size={32} className="mt-0.5 text-[#16B3DE]" />
                <h2 className="text-2xl font-semibold">Resumen de tu cita</h2>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <span className="p-4 bg-[#F5F9FB] rounded-md text-gray-500">Fecha no seleccionada</span>
            <span className="p-4 bg-[#F5F9FB] rounded-md text-gray-500">Horario no seleccionado</span>
            <div className="border border-gray-300 mt-6 mb-6"></div>
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl">Total a pagar:</h3>
                <span className="font-bold text-2xl text-[#16B3DE]">$25.000</span>
            </div>
            <div className="p-4 bg-[#FDF5E6] border border-[#FADBA4] rounded-md flex gap-2 ">
                <IoAlertCircleOutline size={54} color="#F6A61B" className="pb-7" />
                <p><span className="font-bold">Nota:</span> Procedimientos adicionales como lavado de oídos se cobran en el momento.</p>
            </div>

            <button className="p-3 bg-[#16B3DE] text-white font-semibold text-[18px] rounded-md">Confirmar cita</button>
        </div>
    </div>
}