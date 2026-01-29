import { SectionTitle } from "./SectionTitle"

export const Services = () => {
    return <div className="flex flex-col gap-8 md:gap-20">
        <SectionTitle title='Nuestros Servicio' description='Ofrecemos una amplia gama de servicios médicos a domicilio para cuidar tu salud auditiva.' />
        <div className="flex flex-col md:grid gap-8 md:gap-8 md:grid-cols-4 ">
            <div className="flex flex-col rounded-xl shadow-lg hover:scale-105 transition-all p-4 md:p-10 bg-[#F7FDFF] border border-gray-100 gap-4 md:gap-6 ">
                <h3 className="text-xl font-semibold md:text-3xl">Consulta Auditiva</h3>
                <p className="md:text-2xl text-xl text-gray-600 leading-relaxed">
                    Evaluación auditiva integral para detectar problemas de audición desde la comodidad de tu hogar.
                </p>
            </div>

            <div className="flex flex-col rounded-xl shadow-lg hover:scale-105 transition-all p-4 bg-[#F7FDFF] border border-gray-100 md:p-10 gap-4 md:gap-6">
                <h3 className="text-xl font-semibold md:text-3xl">Limpieza de Oído</h3>
                <p className="md:text-2xl text-xl text-gray-600 leading-relaxed">
                    Limpieza segura y profesional para eliminar tapones de cerumen y mejorar tu audición.
                </p>
            </div>

            <div className="flex flex-col rounded-xl shadow-lg hover:scale-105 transition-all p-4 bg-[#F7FDFF] border border-gray-100 md:p-10 gap-4 md:gap-6">
                <h3 className="text-xl font-semibold md:text-3xl">Calibración de Audífonos</h3>
                <p className="md:text-2xl text-xl text-gray-600 leading-relaxed">
                    Ajuste personalizado de tus audífonos para una experiencia auditiva clara y cómoda.
                </p>
            </div>

            <div className="flex items-center justify-center rounded-xl shadow-lg hover:scale-105 transition-all p-4 bg-[#F7FDFF] border border-[#1EB3CE] border-dashed md:p-10">
                <p className="text-[#1EB3CE] md:text-2xl text-xl leading-relaxed">
                    Y más servicios de salud auditiva a domicilio
                </p>
            </div>
        </div>

    </div>
}