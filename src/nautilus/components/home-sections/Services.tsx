export const Services = () => {
    return <div>
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Nuestros Servicios</h2>
            <p className="text-[18px] text-gray-500">
                Ofrecemos una amplia gama de servicios médicos a domicilio para cuidar tu salud auditiva.
            </p>
        </div>

        <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col border border-gray-300 rounded-md p-4 bg-white">
                <h3 className="text-xl font-semibold">Consulta Auditiva</h3>
                <p className="text-gray-500">
                    Evaluación auditiva integral para detectar problemas de audición desde la comodidad de tu hogar.
                </p>
            </div>

            <div className="flex flex-col border border-gray-300 rounded-md p-4 bg-white">
                <h3 className="text-xl font-semibold">Limpieza de Oído</h3>
                <p className="text-gray-500">
                    Limpieza segura y profesional para eliminar tapones de cerumen y mejorar tu audición.
                </p>
            </div>

            <div className="flex flex-col border border-gray-300 rounded-md p-4 bg-white">
                <h3 className="text-xl font-semibold">Calibración de Audífonos</h3>
                <p className="text-gray-500">
                    Ajuste personalizado de tus audífonos para una experiencia auditiva clara y cómoda.
                </p>
            </div>

            <div className="flex items-center justify-center border border-dashed 
                border-[#10ACDB] rounded-lg p-5 bg-blue-50">
                <p className="text-[#10ACDB] font-semibold">
                    Y más servicios de salud auditiva a domicilio
                </p>
            </div>
        </div>
    </div>
}