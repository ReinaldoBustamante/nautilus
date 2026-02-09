import type { Schedule } from '../interfaces/schedule.interface'
import { nautilusApi } from '../../api/nautilus.api'

export const getSchedulesAvalaible = async (doctorId: string, date: string): Promise<Schedule[]> => {
    const response = await nautilusApi.get(`/doctors/${doctorId}/schedule?date=${date}`)
    return response.data
}