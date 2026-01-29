import { GrLocation } from "react-icons/gr"
import { HiOutlineMail } from "react-icons/hi"
import { LuPhone } from "react-icons/lu"
import { SectionTitle } from "./SectionTitle"

export const Contact = () => {
    return <div className="flex flex-col gap-8 md:gap-20">
        <SectionTitle title="Contactanos" description="Estamos aquí para ayudarte. Comunícate con nosotros por cualquiera de estos medios."/>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:pb-20 pb-16">
            <div className="p-4 bg-[#F7FDFF] border border-gray-100 shadow-lg hover:scale-105 transition-all rounded-md flex flex-col gap-3 md:gap-6 md:p-10">
                <div className="flex flex-col gap-3 md:gap-6">
                      <LuPhone className="bg-[#08A8D2] p-2 size-12 md:p-4 rounded-xl md:size-20" color="#FFFFFF" />
                    <h3 className="md:text-3xl font-semibold text-xl">Telefono</h3>
                </div>
                <p className="md:text-2xl text-xl text-gray-600 leading-relaxed">+569 1234 5678</p>
            </div>
            <div className="p-4 bg-[#F7FDFF] border border-gray-100 shadow-lg hover:scale-105 transition-all rounded-md flex flex-col gap-3 md:gap-6 md:p-10">
                <div className="flex flex-col gap-3 md:gap-6">
                    <HiOutlineMail className="bg-[#08A8D2] p-2 size-12 md:p-4 rounded-xl md:size-20" color="#FFFFFF" />
                    <h3 className="md:text-3xl font-semibold text-xl">Correo electronico</h3>
                </div>
                <p className="md:text-2xl text-xl text-gray-600 leading-relaxed">test@nautilus.com</p>
            </div>
            <div className="p-4 bg-[#F7FDFF] border border-gray-100 shadow-lg hover:scale-105 transition-all rounded-md flex flex-col gap-3 md:gap-6 md:p-10">
                <div className="flex flex-col gap-3 md:gap-6">
                    <GrLocation className="bg-[#08A8D2] p-2 size-12 md:p-4 rounded-xl md:size-20" color="#FFFFFF" />
                    <h3 className="md:text-3xl font-semibold text-xl">Ubicacion</h3>
                </div>
                <p className="md:text-2xl text-xl text-gray-600 leading-relaxed">Valdivia</p>
            </div>
        </div>
    </div>
}