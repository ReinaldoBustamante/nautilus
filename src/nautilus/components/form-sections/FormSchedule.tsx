import type { UseFormSetValue, UseFormWatch } from "react-hook-form"
import type { Schedule } from "../../interfaces/schedule.interface"

import { Spinner } from "../ui/Spinner"
import { Alert } from "../ui/Alert"
import { FormSectionTitle } from "./FormSectionTitle"
import type { AppointmentSchemaType } from "../../schemas/appointment.schemas"


interface FormScheduleProps {
    setValue: UseFormSetValue<AppointmentSchemaType>,
    watch: UseFormWatch<AppointmentSchemaType>
    schedules: Schedule[]
    isLoading: boolean
}

export const FormSchedule = ({ setValue, watch, schedules, isLoading }: FormScheduleProps) => {
    const currentSchedule = watch('schedule');
    const hasDate = !!watch('date');
    return (
        <div className="bg-white p-4 py-8 md:p-10 rounded-xl flex flex-col gap-6 md:gap-10 border border-gray-100 shadow-lg">
            <FormSectionTitle title='Selecciona un horario' description='Horarios disponibles para tu cita' step={2} />
            {
                hasDate
                    ? isLoading
                        ? <Spinner />
                        : schedules.length === 0
                            ? <Alert message="No hay horarios disponibles" variant="error" />
                            : <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
                                {
                                    schedules.map((schedule) => {
                                        return (
                                            <div
                                                key={schedule.id}
                                                className={`p-4 md:p-6 md:border-3 border-2 border-gray-200 rounded-xl text-center cursor-pointer transition-all hover:scale-105
                                        ${schedule.start_time === currentSchedule ? 'bg-[#16B3DE] text-white border-[#16B3DE]' : ''}`}
                                                onClick={() => setValue('schedule', schedule.start_time, { shouldValidate: true, shouldTouch: true })}
                                            >
                                                <span className="md:text-xl ">{schedule.start_time} - {schedule.end_time}</span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                    : <Alert message="Seleccione una fecha" variant="warning" />

            }
        </div>
    );
};


