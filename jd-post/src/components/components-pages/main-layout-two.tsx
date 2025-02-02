import CardArticle from "../cards/card-article"
import CardArticleImage from "../cards/card-article-image"
import Top1Article from "../top-1-article"
import MoreNewsContainer from "../container/more-news-container";
import TwoCardArticleImageContainer from "../container/two-card-article-image-container";
import OneCardTopArticleContainer from "../container/one-card-top-article-container";

export default function MainLayoutTwo({ news, params }: { news: News[], params: string }) {
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="my-5 border-b-2 text-5xl font-bold text-red-600">{params.toUpperCase()}</h1>
                <div className="grid grid-cols-4 gap-x-5 gap-y-10 border-b-2 pb-10">
                    <div className="col-span-3">
                        <Top1Article news={news[0]} page={params} />
                    </div>
                    <CardArticleImage news={news[1]} page={params} />
                    <div className="col-span-3 grid grid-cols-4 gap-5">
                        {
                            news.slice(2, 2 + 4).map((item, idx) => (
                                <CardArticleImage key={idx} news={item} page={params} />
                            ))
                        }
                    </div>
                    <CardArticleImage news={news[6]} page={params} />
                    <div className="col-start-1 col-span-3 flex gap-5">
                        {
                            news.slice(7, 7 + 2).map((item, idx) => (
                                <CardArticle key={idx} news={item} />
                            ))
                        }
                    </div>
                </div>
                <TwoCardArticleImageContainer news={news} startIndex={9} page={params} />
                <OneCardTopArticleContainer news={news[11]} />
                <MoreNewsContainer news={news} params={params} startIndex={12}/>
            </div>
            <div className="border-y-2 h-10">

            </div>
        </div>
    )
}