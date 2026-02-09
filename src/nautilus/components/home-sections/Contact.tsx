import { GrLocation } from "react-icons/gr"
import { HiOutlineMail } from "react-icons/hi"
import { LuPhone } from "react-icons/lu"
import { SectionTitle } from "./SectionTitle"
import type { IconType } from "react-icons"



export const Contact = () => {

    const contacts: { title: string, value: string, icon: IconType }[] = [
        { title: "Telefono", value: "+569 1234 5678", icon: LuPhone },
        { title: "Correo electronico", value: "test@nautilus.com", icon: HiOutlineMail },
        { title: "Ubicacion", value: "Valdivia", icon: GrLocation },
    ]


    return <div className="flex flex-col gap-8 md:gap-20">
        <SectionTitle title="Contactanos" description="Estamos aquí para ayudarte. Comunícate con nosotros por cualquiera de estos medios." />
        <div className="flex flex-col gap-8 md:grid lg:grid-cols-3 md:pb-20 pb-16">
            {
                contacts.map(({title, value, icon: Icon}) => {
                    return <div className="p-4 bg-[#F7FDFF] border border-gray-100 shadow-lg hover:scale-105 transition-all rounded-md flex flex-col gap-3 md:gap-6 md:p-10">
                        <div className="flex flex-col gap-3 md:gap-6">
                            <Icon className="bg-[#08A8D2] p-2 size-12 md:p-4 rounded-xl md:size-20" color="#FFFFFF" />
                            <h3 className="md:text-3xl font-semibold text-xl text-[#172A45]">{title}</h3>
                        </div>
                        <p className="md:text-2xl text-xl text-gray-600 leading-relaxed">{value}</p>
                    </div>
                })
            }
        </div>
    </div>
}