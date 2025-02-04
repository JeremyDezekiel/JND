'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
    error,
}: {
    error: Error & { digest?: string }
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col justify-center items-center h-screen mx-auto'>
            <h2 className='font-bold text-4xl text-red-600'>Something went wrong!</h2>
            <p>{error.message}</p>
            <p className='mx-10 text-center'>{error.stack}</p>
        </div>
    )
}