import { FiCalendar, FiShield } from "react-icons/fi"
import { GrLocation } from "react-icons/gr"
import { MdOutlineSchedule } from "react-icons/md"
import { SectionTitle } from "./SectionTitle"

export const Benefits = () => {

    const benefits = [
        { id: 1, title: 'Agenda Facil', description: 'Programa tu cita en segundos con nuestro sistema intuitivo', icon: FiCalendar },
        { id: 2, title: 'Atención a Domicilio', description: 'El profesional médico va directamente a tu ubicación', icon: GrLocation },
        { id: 3, title: 'Profesionales Certificados', description: 'Todos nuestros médicos están verificados y certificados', icon: FiShield },
        { id: 4, title: 'Horarios Flexibles', description: 'Disponibilidad de lunes a sábado en múltiples horarios', icon: MdOutlineSchedule },
    ]

    return <div className="flex flex-col gap-8 md:gap-12 ">
        <SectionTitle title='¿Por qué elegir Nautilus?' description='Combinamos tecnología con atención médica de calidad para brindarte la mejor experiencia en salud a domicilio' />
        <div className="flex flex-col gap-8 md:flex-row">
            {
                benefits.map((benefit) => {
                    return <div key={benefit.id} className="p-4 bg-white border border-gray-200 rounded-md flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                            <benefit.icon size={48} className="bg-[#E6F6FD] p-2 rounded-md" color="#0DA2E7" />
                            <h3 className="text-xl font-semibold">{benefit.title}</h3>
                        </div>
                        <p className="text-[18px] text-gray-500">{benefit.description}</p>
                    </div>
                })
            }
        </div>
    </div>
}