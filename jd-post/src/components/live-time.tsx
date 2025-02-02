"use client"

import React, { useEffect, useState } from 'react'

const LiveTime: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date | null>(null)
    const [time, setTime] = useState<string>("")

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            setCurrentDate(now)
            setTime(now.toLocaleTimeString())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    if (!currentDate) {
        return null
    }

    const monthNames: string[] = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ]
    const dayNames: string[] = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]

    const dayOfWeek: string = dayNames[currentDate.getDay()]
    const dayOfMonth: number = currentDate.getDate()
    const month: string = monthNames[currentDate.getMonth()]
    const year: number = currentDate.getFullYear()

    return (
        <div className='text-center hidden md:block'>
            <h2>{`${dayOfWeek}, ${month} ${dayOfMonth} ${year}`}</h2>
            <h3>{time}</h3>   
        </div>
    )
}

export default LiveTime