export default function SkeletonCardSearch() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-b-2 pb-10 mt-10 animate-pulse">
            <div className="bg-gray-300 rounded-md h-60"></div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col gap-5">
                <div className="bg-gray-300 h-6 w-3/4 mb-3"></div>
                <div className="bg-gray-300 h-4 w-full mb-3"></div>
                <div className="flex gap-2">
                    <div className="bg-gray-300 h-4 w-32"></div>
                    <div className="bg-gray-300 h-4 w-24"></div>
                </div>
            </div>
        </div>
    )
}