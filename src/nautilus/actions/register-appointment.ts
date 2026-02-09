import type { AppointmentSchemaType } from "../schemas/appointment.schemas"
import { nautilusApi } from "../../api/nautilus.api";

export const registerAppointment = async (formData: AppointmentSchemaType) => {
    try {

        const response = await nautilusApi.post('/appointments/register', {
            date: `${formData.date}T${formData.schedule}:00Z`,
            address: formData.address,
            doctor_id: formData.doctor_id,
            email: formData.email,
            name: formData.name,
            phone_number: formData.phoneNumber,
            rut: formData.rut,
            comment: formData.comment
        })

        return response.data
    } catch (err) {
        throw err
    }
}