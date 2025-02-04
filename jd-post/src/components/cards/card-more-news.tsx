import { formatRelativeTime, formatSection } from "@/formats";

export default function CardMoreNews({ news }: { news: News}) {
    return (
        <a href={news.url} target="_blank" rel="noopener noreferrer">
            <article className="flex flex-col sm:flex-row gap-10 group cursor-pointer">
                <span className="text-end min-w-fit">{formatRelativeTime(news.updated_date)}</span>
                <div className="flex flex-col sm:flex-row justify-between border-b-2 pb-5 w-full">
                    <div className="flex flex-col justify-between sm:w-3/5 gap-5">
                        <h2 className="font-bold text-2xl sm:text-3xl group-hover:underline">{news.title}</h2>
                        <p className="text-sm sm:text-base">{news.abstract}</p>
                        <div className="flex justify-between gap-10">
                            <span className="self-end">{formatSection(news.section)}</span>
                            <span>{news.byline}</span>
                        </div>
                    </div>
                    <img className="w-full sm:w-1/3 h-auto object-cover rounded-md" src={news.multimedia[1].url} alt={news.multimedia[1].caption} />
                </div>
            </article>
        </a>
    )
}