import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const FormDate = () => {

    const getDates = (days: number, pagination: number) => {
        const dates: Date[] = [];

        for (let i = days * pagination + 1; i < days * pagination + 6; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            dates.push(date);
        }
        return dates
    }


    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

    const initState = {
        pagination: 0,
        dates: getDates(0, 1)
    }
    const [days, setDays] = useState(initState)
    
    return <div className="bg-white p-4 rounded-md flex flex-col gap-4 border border-gray-300">
        <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
                <span className="p-4 bg-[#16B3DE] rounded-[50%] w-4 h-4 flex items-center justify-center text-white font-semibold">1</span>
                <h2 className="text-2xl font-semibold">Selecciona una fecha</h2>
            </div>
            <p className="text-gray-500 text-[18px] ">Elige el dia de tu preferencia</p>
        </div>
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <button
                    disabled={days.pagination === 0}
                    className={days.pagination === 0 ? 'opacity-30' : ''}
                    type="button"
                    onClick={(e) => {
                        e.preventDefault()
                        setDays({
                            pagination: days.pagination - 1,
                            dates: getDates(5, days.pagination - 1)
                        })
                    }}

                >
                    <IoIosArrowBack size={20} />
                </button>
                <span className="text-xl">{months[days.dates[0].getMonth()]} {days.dates[0].getFullYear()}</span>
                <button
                    disabled={days.pagination === 5}
                    className={days.pagination === 5 ? 'opacity-30' : ''}
                    type="button"
                    onClick={(e) => {
                         e.preventDefault()
                        setDays({
                            pagination: days.pagination + 1,
                            dates: getDates(5, days.pagination + 1)
                        })
                    }}
                >
                    <IoIosArrowForward size={20} />
                </button>
            </div>
            <div className="flex gap-3">
                {
                    days.dates.map(date => {
                        return <div key={date.getDate()} className="flex flex-col flex-1 p-2 pt-3 pb-3 border-2 border-gray-200 rounded-md items-center justify-center">
                            <span>{daysOfWeek[date.getDay()].slice(0, 3)}</span>
                            <span className="text-[18px] font-semibold">{date.getDate()}</span>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}