import CardArticleImage from "../cards/card-article-image"
import MoreNewsContainer from "../container/more-news-container"
import TwoCardArticleImageContainer from "../container/two-card-article-image-container"
import Top1Article from "../top-1-article"
import TopArticleBusiness from "../top-article/top-article-two"
import MainLayoutSMMD from "./main-layout-sm-md"

export default function MainLayoutThree({ news, params }: { news: News[], params: string }) {
    return (
        <div>
            <main className="container mx-auto hidden lg:block">
                <h1 className="my-5 border-b-2 text-5xl font-bold text-red-600">{params.toUpperCase()}</h1>
                <div className="py-10">
                    <Top1Article news={news[0]} page={params} />
                </div>
                <TwoCardArticleImageContainer news={news} page={params} startIndex={1} />
                <MoreNewsContainer news={news} startIndex={3} params={params}/>
                <section className="flex flex-col gap-10 pb-10 pt-5 border-b-2">
                    <h1 className="font-bold text-3xl">More Article</h1>
                    <div className="grid grid-cols-4">
                        <div className="col-span-3 grid grid-cols-3 gap-10">
                            {
                                news.slice(8, 8 + 6).map((item, idx) => (
                                    <CardArticleImage key={idx} news={item} page={params} />
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="flex flex-col gap-10 pb-10 pt-5 border-b-2">
                    <h1 className="font-bold text-3xl">In Pictures</h1>
                    <div className="mx-96">
                        <TopArticleBusiness news={news[14]} />
                    </div>
                </section>
                <MoreNewsContainer news={news} params={params} startIndex={15} />
            </main>
            <MainLayoutSMMD news={news} params={params} />
            <div className="border-y-2 h-10">

            </div>
        </div>
    )
}