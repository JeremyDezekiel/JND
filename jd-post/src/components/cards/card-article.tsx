import { formatRelativeTime, formatSection } from "@/formats";

export default function CardArticle({ news }: { news: News }) {
    return (
        <a href={news.url} target="_blank" rel="noopener noreferrer" className="h-fit">
            <div className="flex flex-col gap-5 border-b-2 group cursor-pointer">
                <h1 className="font-bold text-xl group-hover:underline">{news.title}</h1>
                <p>{news.abstract}</p>
                <div className="pb-2">
                    <span className="pe-5">{formatRelativeTime(news.updated_date)}</span>
                    {
                        news.section !== "" && <span className="ps-5 border-s-2">{formatSection(news.section)}</span>
                    }
                </div>
            </div>
        </a>
    )
}