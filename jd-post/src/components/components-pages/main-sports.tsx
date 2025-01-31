import { News } from "@/types"
import CardArticle from "../card-article"
import CardArticleImage from "../card-article-image"
import Top1Article from "../top-1-article"
import MoreNewsContainer from "../more-news-container"

export default function MainSports({ news, params }: { news: News[], params: string }) {
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="my-5 border-b-2 text-5xl font-bold text-red-600">{params.toUpperCase()}</h1>
                <div className="grid grid-cols-4 gap-x-5 gap-y-10">
                    <div className="col-span-3">
                        <Top1Article news={news[0]} page={params} />
                    </div>
                    <CardArticleImage news={news[1]} />
                    <div className="col-span-3 grid grid-cols-4 gap-5">
                        {
                            news.slice(2, 2 + 4).map((item, idx) => (
                                <CardArticleImage key={idx} news={item} />
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-5">
                        {
                            news.slice(6, 6 + 2).map((item, idx) => (
                                <CardArticle key={idx} news={item} />
                            ))
                        }
                    </div>
                </div>
                <MoreNewsContainer news={news} params={params} />
            </div>
        </div>
    )
}