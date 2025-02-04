import CardArticle from "../cards/card-article"
import CardArticleImage from "../cards/card-article-image"
import Top1Article from "../top-1-article"
import MoreNewsContainer from "../container/more-news-container";

export default function MainSports({ news, params }: { news: News[], params: string }) {
    return (
        <div>
            <main className="container mx-auto px-4 sm:px-8 lg:px-20">
                <h1 className="my-5 border-b-2 text-5xl font-bold text-red-600">{params.toUpperCase()}</h1>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                        <Top1Article news={news[0]} page={params} />
                    </div>
                    <CardArticleImage news={news[1]} page={params} />
                    <section className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {news.slice(2, 6).map((item, idx) => (
                            <CardArticleImage key={idx} news={item} page={params} />
                        ))}
                    </section>
                    <aside className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-1">
                        {news.slice(6, 8).map((item, idx) => (
                            <CardArticle key={idx} news={item} />
                        ))}
                    </aside>
                </section>
                <MoreNewsContainer news={news} params={params} startIndex={8} />
            </main>
            <div className="border-y-2 h-10">
                
            </div>
        </div>
    )
}