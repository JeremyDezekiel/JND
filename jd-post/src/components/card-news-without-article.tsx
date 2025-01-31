import { formatRelativeTime, formatSection } from "@/formats";
import { News } from "@/types";

export default function CardNewsWithoutArticle({ news }: { news: News }) {
    return (
        <a href={news.url} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col gap-5 group cursor-pointer">
                <h3 className="font-bold text-xl group-hover:underline">{news.title}</h3>
                <div className="pb-2">
                    <span className="pe-3">{formatRelativeTime(news.updated_date)}</span>
                    {
                        news.section !== "" && <span className="ps-3 border-s-2">{formatSection(news.section)}</span>
                    }
                </div>
            </div>
        </a>
    )
}