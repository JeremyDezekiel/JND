import CardArticle from "../cards/card-article";
import CardArticleImage from "../cards/card-article-image";
import MoreNewsContainer from "../container/more-news-container";
import TwoCardArticleImageContainer from "../container/two-card-article-image-container";

export default function MainLayoutSMMD({ news, params }: { news: News[], params: string }) {
    return (
        <div className="container mx-auto block lg:hidden mt-10">
            {
                params !== "home" && (
                    <h1 className="my-5 border-b-2 text-5xl font-bold text-red-600">{params.toUpperCase()}</h1>
                )
            }
            <CardArticleImage news={news[0]} page={params} />
            <div className="mx-10 py-10 flex flex-col gap-5">
                {
                    news.slice(1, 1 + 2).map((item, idx) => (
                        <CardArticleImage key={idx} news={item} page={params} />
                    ))
                }
            </div>
            <div className="flex flex-col gap-5">
                {
                    news.slice(3, 3 + 4).map((item, idx) => (
                        <CardArticle key={idx} news={item} />
                    ))
                }
            </div>
            <TwoCardArticleImageContainer news={news} page={params} startIndex={7} />
            <div className="flex flex-col gap-5 mt-10">
                {
                    news.slice(9, 9 + 4).map((item, idx) => (
                        <CardArticle key={idx} news={item} />
                    ))
                }
            </div>
            <div className="mt-10">
                <CardArticleImage news={news[13]} page={params} />
            </div>
            <MoreNewsContainer news={news} params={params} startIndex={14} />
        </div>
    )
}