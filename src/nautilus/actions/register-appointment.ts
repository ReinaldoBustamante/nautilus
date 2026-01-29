import axios from "axios"
import type { AppointmentSchemaType } from "../schemas/appointment.schemas"

export const registerAppointment = async (formData: AppointmentSchemaType) => {
    try {
        const url = `https://nautilus-api-test.up.railway.app/appointments/register`
        const response = await axios.post(url, {
            date: `${formData.date}T${formData.schedule}:00Z`,
            address: formData.address,
            doctor_id: 'f31e1b4b-8976-4381-971a-1355bb32fd06',
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