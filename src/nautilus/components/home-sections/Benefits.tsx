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

    return <div className="flex flex-col gap-8 md:gap-20 ">
        <SectionTitle title='¿Por qué elegir Nautilus?' description='Combinamos tecnología con atención médica de calidad para brindarte la mejor experiencia en salud a domicilio' />
        <div className="flex flex-col gap-8 md:flex-row">
            {
                benefits.map((benefit) => {
                    return <div key={benefit.id} className="p-4 bg-[#f7fdff] rounded-xl shadow-lg flex flex-col gap-4 md:p-10 md:gap-6 hover:scale-105 transition-all">
                        <div className="flex flex-col gap-4 md:gap-6">
                            <benefit.icon className="bg-[#08A8D2] p-2 size-12 md:p-4 rounded-xl md:size-20" color="#FFFFFF" />
                            <h3 className="md:text-3xl font-semibold text-xl">{benefit.title}</h3>
                        </div>
                        <p className="md:text-2xl text-xl text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                })
            }
        </div>
    </div>
}