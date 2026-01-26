
export interface Schedule {
    id: string;
    day_of_week: number;
    start_time: Date;
    end_time: Date;
    doctor_id: string;
    created_at: Date;
    updated_at: null;
}
