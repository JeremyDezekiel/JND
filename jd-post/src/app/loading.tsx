export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
            <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
                <div className="text-2xl font-semibold">Loading...</div>
            </div>
        </div>
    )
}