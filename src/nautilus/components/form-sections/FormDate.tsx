import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDate } from "../../hooks/useDate";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { FormSectionTitle } from "./FormSectionTitle";
import type { AppointmentSchemaType } from "../../schemas/appointment.schemas";

interface FormDateProps {
    setValue: UseFormSetValue<AppointmentSchemaType>,
    watch: UseFormWatch<AppointmentSchemaType>,
}

export const FormDate = ({ setValue, watch }: FormDateProps) => {

    const { days, next, prev, getDayName, getMonthName, isInitPagination, isLastPagination } = useDate()

    return <div className="bg-white p-4 pt-8 pb-8 rounded-md flex flex-col gap-6 border border-gray-300">
        <FormSectionTitle title='Seleccione una fecha' description='Elige el dia que prefieras' step={1} />
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <button disabled={isInitPagination} className={isInitPagination ? 'opacity-30' : ''} type="button" onClick={prev}>
                    <IoIosArrowBack size={28} />
                </button>
                <span className="text-xl">{getMonthName(days.dates[0].getMonth())} {days.dates[0].getFullYear()}</span>
                <button disabled={isLastPagination} className={isLastPagination ? 'opacity-30' : ''} type="button" onClick={next}>
                    <IoIosArrowForward size={28} />
                </button>
            </div>
            <div className="flex gap-1">
                {
                    days.dates.map(date => {
                        const year = date.getFullYear()
                        const month = date.getMonth()
                        const day = date.getDate().toString().padStart(2, '0')
                        const monthNormalized = `${year}-${(month + 1).toString().padStart(2, '0')}-${day}`
                        return <div
                            key={day}
                            className={`
                                flex flex-col flex-1 p-2 pt-3 pb-3 border-2 
                                border-gray-200 rounded-md items-center h-24 transition-colors
                                justify-center ${monthNormalized === watch('date') ? 'bg-[#16B3DE] text-white' : ''}
                            `}
                            onClick={
                                () => {
                                    setValue('date', monthNormalized, { shouldValidate: true, shouldTouch: true })
                                    setValue('schedule', '', { shouldValidate: true, shouldTouch: true })
                                }
                            }
                        >
                            <span>{getDayName(date.getDay())}</span>
                            <span className="text-[24px] font-semibold">{day}</span>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}