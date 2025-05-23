import CardArticleImage from "../cards/card-article-image";
import FourCardArticleCountainer from "../container/four-card-article-container";
import MoreNewsContainer from "../container/more-news-container";
import OneCardTopArticleContainer from "../container/one-card-top-article-container";
import TwoCardArticleImageContainer from "../container/two-card-article-image-container";
import Top1Article from "../top-1-article";
import MainLayoutSMMD from "./main-layout-sm-md";

export default function MainLayoutFour({ news, params }: { news: News[], params: string }) {
    return (
        <div>
            <main className="container mx-auto hidden lg:block">
                <h1 className="my-5 border-b-2 text-5xl font-bold text-red-600">{params.toUpperCase()}</h1>
                <section className="grid grid-cols-4 gap-5 py-10 border-b-2">
                    <div className="col-span-3">
                        <Top1Article news={news[0]} page={params} />
                    </div>
                    <aside className="flex flex-col gap-5">
                        {
                            news.slice(1, 1 + 3).map((item, idx) => (
                                <CardArticleImage key={idx} news={item} page={""} />
                            ))
                        }
                    </aside>
                </section>
                <FourCardArticleCountainer news={news} startIndex={4} />
                <TwoCardArticleImageContainer news={news} startIndex={9} page={params} />
                <OneCardTopArticleContainer news={news[11]} />
                <MoreNewsContainer news={news} params={params} startIndex={12} />
            </main>
            <MainLayoutSMMD news={news} params={params} />
            <div className="border-y-2 h-10">

            </div>
        </div>
    )
}