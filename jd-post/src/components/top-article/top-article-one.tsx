import { formatRelativeTime, formatSection } from "@/formats";

export default function TopArticleOne({ news, page }: { news: News, page: string }) {
    return (
        <a href={news.url} target="_blank" rel="noopener noreferrer">
            <article className="flex flex-col gap-5 group cursor-pointer">
                <img className="w-full" src={news.multimedia[0].url} alt={news.multimedia[0].caption} />
                <h1 className="font-bold text-4xl group-hover:underline">{news.title}</h1>
                <p className={`${page === "world" ? 'text-center mx-5' : ''}`}>{news.abstract}</p>
                {
                    !(page === "world" || page === "arts") && (
                        <div className="pb-2">
                            <span className="pe-5">{formatRelativeTime(news.updated_date)}</span>
                            {
                                news.section !== "" && <span className="ps-5 border-s-2">{formatSection(news.section)}</span>
                            }
                        </div>
                    )
                }
            </article>
        </a>
    )
}