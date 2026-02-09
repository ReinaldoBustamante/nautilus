import axios from "axios"
import type { AppointmentSchemaType } from "../schemas/appointment.schemas"

export const registerAppointment = async (formData: AppointmentSchemaType) => {
    try {
        const url = `https://nautilus-api-test.up.railway.app/appointments/register`
        const response = await axios.post(url, {
            date: `${formData.date}T${formData.schedule}:00Z`,
            address: formData.address,
            doctor_id: 'eb7b67b2-24af-4c33-9eab-41ea9cc74f6c',
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