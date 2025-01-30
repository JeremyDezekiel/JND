import { News } from "@/types"

export default function Top1Article({ news, page }: { news: News, page: string }) {
    return (
        page === "home" ? (
            <div className="flex flex-col gap-5 group cursor-pointer">
                <img className="w-full" src={news.multimedia[0].url} alt={news.multimedia[0].caption} />
                <h1 className="font-bold text-4xl group-hover:underline">{news.title}</h1>
                <p>{news.abstract}</p>
            </div>
        ) : page === "sports" ? (
            <div className="col-span-3 flex gap-5 group cursor-pointer">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl group-hover:underline">{news.title}</h1>
                    <p>{news.abstract}</p>
                </div>
                <img src={news.multimedia[1].url} alt={news.multimedia[1].caption} />
            </div>
        ) : (
            <div className="relative w-full h-[50vh] group cursor-pointer">
                <img className="w-full h-full" src={news.multimedia[0].url} alt={news.multimedia[0].caption} />
                <div className="absolute bottom-0 left-0 p-5 bg-black text-white flex flex-col gap-3 w-2/5">
                    <h1 className="font-bold text-3xl group-hover:underline">{news.title}</h1>
                    <p>{news.abstract}</p>
                </div>
            </div>
        )
    )
}