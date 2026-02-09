
import { getAppointments } from "../../actions/get-appointment-action"
import { AuthStore } from "../../../auth/store/auth.store";
import { Spinner } from "../../../nautilus/components/ui/Spinner";
import { useQuery } from '@tanstack/react-query';
import { AppointmentList } from "../../components/AppointmentList";


export const DashboardPage = () => {
    const { token, doctor_id } = AuthStore();
    const { data: appointments, isLoading } = useQuery({
        queryKey: ['appointments', doctor_id],
        queryFn: () => getAppointments(token!, doctor_id!),
        enabled: !!token && !!doctor_id,
        staleTime: 1000 * 60 * 1,
    });

    return isLoading
        ? <Spinner />
        : <AppointmentList appointments={appointments} />
}