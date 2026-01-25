export const FormSchedule = () => {

    const schedules = [
        {
            init_time: '9:00',
            end_time: '10:00'
        },
        {
            init_time: '10:00',
            end_time: '11:00'
        },
        {
            init_time: '11:00',
            end_time: '12:00'
        }
    ]
    
    return <div className="bg-white p-4 rounded-md flex flex-col gap-4 border border-gray-300">
        <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
                <span className="p-4 bg-[#16B3DE] rounded-[50%] w-4 h-4 flex items-center justify-center text-white font-semibold">2</span>
                <h2 className="text-2xl font-semibold">Selecciona un horario</h2>
            </div>
            <p className="text-gray-500 text-[18px] ">Horarios disponibles para tu cita</p>
        </div>
        <div className="flex flex-col gap-3">
            {
                schedules.map(schedule => {
                    return <div key={schedule.init_time} className="p-4 pt-3 pb-3 border-2 border-gray-200 rounded-md text-center">
                        <span>{schedule.init_time} AM - {schedule.end_time} PM</span>
                    </div>
                })
            }
        </div>
    </div>
}