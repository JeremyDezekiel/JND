import { formatRelativeTime, formatSection } from "@/formats"

export default function CardArticleImage({ news, page }: { news: News, page: string }) {
    return (
        <a href={news.url} target="_blank" rel="noopener noreferrer" className="h-fit">
            <div className={`flex flex-col gap-5 group cursor-pointer h-fit ${page !== "world" ? 'border-b-2' : ''}`}>
                <img className="w-fit self-center" src={news.multimedia[1].url} alt={news.multimedia[1].caption} />
                <h3 className="font-bold text-xl group-hover:underline">{news.title}</h3>
                {
                    page !== "" && (
                        <>
                            <p>{news.abstract}</p>
                            <div className="pb-2">
                                <span className="pe-5">{formatRelativeTime(news.updated_date)}</span>
                                {
                                    news.section !== '' && <span className="px-5 border-s-2">{formatSection(news.section)}</span>
                                }
                                {
                                    news.subsection !== "" && <span className="ps-5 border-s-2">{formatSection(news.subsection)}</span>
                                }
                            </div>
                        </>
                    )
                }
            </div>
        </a>
    )
}