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
        <div className="bg-white p-4 pt-8 pb-8 rounded-md flex flex-col gap-6 border border-gray-300">
            <FormSectionTitle title='Selecciona un horario' description='Horarios disponibles para tu cita' step={2} />
            {
                hasDate
                    ? isLoading
                        ? <Spinner />
                        : schedules.length === 0
                            ? <Alert message="No hay horarios disponibles" variant="error"/>
                            : <div className="grid grid-cols-2 gap-3 justify-center">
                                {
                                    schedules.map((schedule) => {
                                        const startTime = schedule.start_time.toString().slice(11, 16);
                                        const endTime = schedule.end_time.toString().slice(11, 16);
                                        return (
                                            <div
                                                key={schedule.id}
                                                className={`p-4 pt-3 pb-3 border-2 border-gray-200 rounded-md text-center cursor-pointer transition-colors
                                        ${startTime === currentSchedule ? 'bg-[#16B3DE] text-white border-[#16B3DE]' : 'hover:bg-gray-50'}`}
                                                onClick={() => setValue('schedule', startTime, { shouldValidate: true, shouldTouch: true })}
                                            >
                                                <span>{startTime} - {endTime}</span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                    : <Alert message="Seleccione una fecha" variant="warning"/>

            }
        </div>
    );
};


