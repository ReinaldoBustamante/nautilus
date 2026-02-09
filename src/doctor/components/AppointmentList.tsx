import type { AppointmentInterface } from "../actions/get-appointment-action";
import { AppointmentItem } from "./AppointmentItem";

export const AppointmentList = ({ appointments }: { appointments: AppointmentInterface[] | undefined }) => {
    
    return <div className="flex flex-col ">
        <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-1 md:gap-3">
                <h1 className="text-3xl font-semibold md:text-5xl md:font-bold">Mis citas medicas</h1>
                <p className="text-lg text-gray-600 md:text-2xl">Gestiona y visualiza todas tus citas</p>
            </div>

            <div className="flex flex-col gap-4">
                {
                    appointments?.map(appointment => <AppointmentItem appointment={appointment} />)
                }
            </div>
        </div>
    </div>
}