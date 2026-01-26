import axios from 'axios'
import type { Schedule } from '../interfaces/schedule.interface'

export const getSchedulesAvalaible = async (doctorId: string, date: string): Promise<Schedule[]> => {
    const url = `https://nautilus-api-test.up.railway.app/doctors/${doctorId}/schedule?date=${date}`
    const response = await axios.get(url)

    return response.data
}