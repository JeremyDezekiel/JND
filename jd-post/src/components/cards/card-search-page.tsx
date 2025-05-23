import { formatRelativeTime } from "@/formats";

export default function CardSearchPage({ news }: { news: ResultsSearch }) {
    return (
        <a href={news.web_url} target="_blank" rel="noopener noreferrer">
            <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-b-2 pb-10 mt-10 group cursor-pointer">
                <img
                    className="w-full h-60 object-cover rounded-md"
                    src={`https://static01.nyt.com/${news.multimedia[1].url}`}
                    alt={news.multimedia[1].url}
                />
                <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col gap-5">
                    <h1 className="font-bold text-3xl group-hover:underline">{news.snippet}</h1>
                    <p>{news.lead_paragraph}</p>
                    <div className="pb-2">
                        <span className="pe-5">{formatRelativeTime(news.pub_date)}</span>
                        <span className="px-5 border-s-2">{news.section_name}</span>
                    </div>
                </div>
            </article>
        </a>
    )
}