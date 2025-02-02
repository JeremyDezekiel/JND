export default function TopArticleTwo({ news }: { news: News}) {
    return (
        <a href={news.url} target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-[50vh] group cursor-pointer">
                <img className="w-full h-full" src={news.multimedia[0].url} alt={news.multimedia[0].caption} />
                <div className="absolute bottom-0 left-0 p-5 bg-black text-white flex flex-col gap-3 w-2/5">
                    <h1 className="font-bold text-3xl group-hover:underline">{news.title}</h1>
                    <p>{news.abstract}</p>
                </div>
            </div>
        </a>
    )
}