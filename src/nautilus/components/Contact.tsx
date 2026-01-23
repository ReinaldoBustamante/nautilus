import { GrLocation } from "react-icons/gr"
import { HiOutlineMail } from "react-icons/hi"
import { LuPhone } from "react-icons/lu"

export const Contact = () => {
    return <div>
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Contáctanos</h2>
            <p className="text-[18px] text-gray-500">Estamos aquí para ayudarte. Comunícate con nosotros por cualquiera de estos medios.</p>
        </div>
        <div className="flex flex-col gap-8">
            <div className="p-4 bg-white border border-gray-200 rounded-md flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <LuPhone size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                    <h3 className="text-xl font-semibold">Telefono</h3>
                </div>
                <p className="text-[18px] text-gray-500">+569 1234 5678</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <HiOutlineMail size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                    <h3 className="text-xl font-semibold">Correo electronico</h3>
                </div>
                <p className="text-[18px] text-gray-500">test@nautilus.com</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <GrLocation size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                    <h3 className="text-xl font-semibold">Ubicacion</h3>
                </div>
                <p className="text-[18px] text-gray-500">Valdivia</p>
            </div>
        </div>
    </div>
}