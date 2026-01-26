import { SectionTitle } from "./SectionTitle"


export const Instructions = () => {

    const instructions = [
        { step: '01', title: 'Elige tu servicio', description: 'Selecciona el tipo de atención que necesitas' },
        { step: '02', title: 'Agenda fecha y hora', description: 'Escoge el momento que mejor te convenga' },
        { step: '03', title: 'Ingresa tu dirección', description: 'Indica dónde debe acudir el profesional' },
        { step: '04', title: 'Recibe la visita', description: 'El doctor llegará puntualmente a tu domicilio' },
    ]
    return <div className="flex flex-col gap-8 md:gap-12 ">
        <SectionTitle title='¿Como funciona?' description='Agendar tu cita médica a domicilio es muy sencillo' />
        <div className="flex flex-col gap-4 text-center md:flex-row">
            {
                instructions.map(instruction => {
                    return <div key={instruction.step} className="flex flex-col md:flex-1">
                        <span className="text-5xl font-bold text-[#7bcdf7]">{instruction.step}</span>
                        <h3 className="text-xl font-semibold">{instruction.title}</h3>
                        <p className=" text-gray-500">{instruction.description}</p>
                    </div>
                })
            }
        </div>
    </div>
}