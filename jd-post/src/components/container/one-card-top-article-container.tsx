import TopArticleSports from "../top-article/top-article-sports";

export default function OneCardTopArticleContainer({ news }: { news: News} ) {
    return (
        <div className="flex flex-col gap-10 py-10 border-b-2">
            <h1 className="font-bold text-4xl">Great Listen</h1>
            <div className="mx-40">
                <TopArticleSports news={news} />
            </div>
        </div>
    )
}