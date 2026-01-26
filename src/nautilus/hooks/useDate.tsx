import { useState } from "react";

export const useDate = () => {

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const maxPagination = 5

    const getDates = (days: number, pagination: number) => {
        const dates: Date[] = [];

        for (let i = days * pagination + 1; i < days * pagination + 6; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            dates.push(date);
        }
        return dates
    }

    const initState = {
        pagination: 0,
        dates: getDates(0, 1)
    }
    const [days, setDays] = useState(initState)
    const isInitPagination = days.pagination === 0
    const isLastPagination = days.pagination === maxPagination 

    const next = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (days.pagination === maxPagination) return;
        setDays({
            pagination: days.pagination + 1,
            dates: getDates(5, days.pagination + 1)
        })
    }

    const prev = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (days.pagination === 0) return
        setDays({
            pagination: days.pagination - 1,
            dates: getDates(5, days.pagination - 1)
        })
    }


    const getDayName = (id: number) => {
        return daysOfWeek[id].slice(0, 3)
    }

    const getMonthName = (id: number) => {
        return months[id]
    }

    return {
        days,
        next,
        prev,
        isInitPagination,
        isLastPagination,
        getDayName,
        getMonthName
    }
}