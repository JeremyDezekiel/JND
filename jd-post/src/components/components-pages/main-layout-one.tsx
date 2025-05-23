import CardArticle from "../cards/card-article";
import CardArticleImage from "../cards/card-article-image";
import Top1Article from "../top-1-article";
import MoreNewsContainer from "../container/more-news-container";
import CardTitle from "../cards/card-title";
import TwoCardArticleImageContainer from "../container/two-card-article-image-container";
import FourCardArticleCountainer from "../container/four-card-article-container";
import OneCardTopArticleContainer from "../container/one-card-top-article-container";
import MainLayoutSMMD from "./main-layout-sm-md";

export default function MainLayoutOne({ news, params }: { news: News[], params: string }) {
    return (
        <div>
            <main className="container mx-auto hidden lg:block">
                {
                    params !== "home" && (
                        <h1 className="my-5 border-b-2 text-5xl font-bold text-red-600">{params.toUpperCase()}</h1>
                    )
                }
                <section className=" py-5 grid grid-cols-4 gap-5 border-b-2">
                    <aside className="flex flex-col gap-5">
                        {
                            news.slice(1, 1 + 2).map((item, idx) => (
                                <CardArticleImage key={idx} news={item} page={params} />
                            ))
                        }
                    </aside>
                    <section className="col-span-2 flex flex-col gap-10">
                        <Top1Article news={news[0]} page={params} />
                        <section className="flex flex-col gap-5">
                            {
                                news.slice(7, 7 + 2).map((item, idx) => (
                                    <CardTitle key={idx} news={item} />
                                ))
                            }
                        </section>
                    </section>
                    <aside className="flex flex-col gap-5">
                        {
                            news.slice(3, 3 + 4).map((item, idx) => (
                                <CardArticle key={idx} news={item} />
                            ))
                        }
                    </aside>
                </section>
                <TwoCardArticleImageContainer news={news} page={params} startIndex={9} />
                <FourCardArticleCountainer news={news} startIndex={11} />
                <OneCardTopArticleContainer news={news[15]} />
                <MoreNewsContainer news={news} params={params} startIndex={16} />
            </main>
            <MainLayoutSMMD news={news} params={params} />
            <div className="border-y-2 h-10">

            </div>
        </div>
    )
}