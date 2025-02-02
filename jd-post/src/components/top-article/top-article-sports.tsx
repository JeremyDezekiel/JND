export default function TopArticleSports({ news }: { news: News }) {
    return (
        <a href={news.url} target="_blank" rel="noopener noreferrer">
            <div className="flex gap-5 group cursor-pointer h-full">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl group-hover:underline">{news.title}</h1>
                    <p>{news.abstract}</p>
                </div>
                <img src={news.multimedia[1].url} alt={news.multimedia[1].caption} />
            </div>
        </a>
    )
}