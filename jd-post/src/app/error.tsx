'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='container mx-auto text-center h-[50lvh] flex flex-col justify-center gap-10'>
            <h2 className='font-bold text-4xl animate-bounce'>Something went wrong!</h2>
            {/* <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button> */}
        </div>
    )
}