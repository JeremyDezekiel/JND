import { formatRelativeTime, formatSection } from "@/formats";
import { News } from "@/types";

export default function CardMoreNews({ news }: { news: News}) {
    return (
        <a href={news.url} target="_blank" rel="noopener noreferrer">
            <div className="flex gap-10 group cursor-pointer">
                <span className="text-end min-w-fit">{formatRelativeTime(news.updated_date)}</span>
                <div className="flex gap-10 justify-between border-b-2 pb-5 w-full">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-5">
                            <h2 className="font-bold text-3xl group-hover:underline">{news.title}</h2>
                            <p>{news.abstract}</p>
                        </div>
                        <div className="flex justify-between gap-10">
                            <span className="self-end">{formatSection(news.section)}</span>
                            <span>{news.byline}</span>
                        </div>
                    </div>
                    <img src={news.multimedia[1].url} alt={news.multimedia[0].caption} />
                </div>
            </div>
        </a>
    )
}