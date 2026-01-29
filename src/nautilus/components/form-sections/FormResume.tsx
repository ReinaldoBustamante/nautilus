import type { UseFormWatch } from "react-hook-form"
import { AiFillCheckCircle } from "react-icons/ai"
import type { AppointmentSchemaType } from "../../schemas/appointment.schemas"
import { MdOutlineDateRange, MdOutlineSchedule } from "react-icons/md"
import { FiUser } from "react-icons/fi"
import { FormResumeCard } from "./FormResumeCard"


interface FormResumeProps {
    watch: UseFormWatch<AppointmentSchemaType>,
    isValid: boolean,
    isSubmitting: boolean
}


export const FormResume = ({ watch, isValid, isSubmitting }: FormResumeProps) => {
 
    const date = watch('date')
    const schedule = watch('schedule')
    const name = watch('name')
    const phoneNumber = watch('phoneNumber')
    const address = watch('address')
    const rut = watch('rut')
    const email = watch('email')

    return <div className="bg-white p-4 pt-8 pb-8 rounded-md flex flex-col gap-6 border border-gray-300">
        <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
                <AiFillCheckCircle size={34} className="mt-0.5 text-[#16B3DE]" />
                <h2 className="text-2xl font-semibold">Resumen de tu cita</h2>
            </div>
        </div>

        <div className="flex flex-col gap-3">
            <FormResumeCard icon={MdOutlineDateRange} title="Fecha">
                <span className="text-[#697E8A] font-semibold text-[18px]">
                    {date || 'Selecciona una fecha'}
                </span>
            </FormResumeCard>
            <FormResumeCard icon={MdOutlineSchedule} title="Horario">
                <span className="text-[#697E8A] font-semibold text-[18px]">
                    {schedule || 'Selecciona un horario'}
                </span>
            </FormResumeCard>
            <FormResumeCard icon={FiUser} title="Paciente">
                <span className="text-[#697E8A] font-semibold text-[18px]">{name || 'Ingrese sus datos'}</span>
                <span className="text-[#697E8A] font-semibold text-[14px]">{rut || ''}</span>
                <span className="text-[#697E8A] font-semibold text-[14px]">{email || ''}</span>
                <span className="text-[#697E8A] font-semibold text-[14px]">{phoneNumber || ''}</span>
                <span className="text-[#697E8A] font-semibold text-[14px]">{address || ''}</span>
            </FormResumeCard>

            <button className={`p-3 bg-[#16B3DE] text-white font-semibold text-[18px] rounded-md ${!isValid ? 'opacity-40' : ''}`} type="submit" disabled={!isValid || isSubmitting}>Confirmar cita</button>
        </div>
    </div>
}