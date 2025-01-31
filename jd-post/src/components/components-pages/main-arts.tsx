import { News } from "@/types"
import Top1Article from "../top-1-article"
import CardArticleImage from "../card-article-image"
import MoreNewsContainer from "../more-news-container"

export default function MainArts({ news, params }: { news: News[], params: string }) {
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="mt-5 mb-10 border-b-2 text-5xl font-bold">{params.toUpperCase()}</h1>
                <div className="mb-10">
                    <Top1Article news={news[0]} page={params} />
                </div>
                <div className="grid grid-cols-2 gap-5 border-b-2 pb-10">
                    {
                        news.slice(1, 1 + 2).map((item, idx) => (
                            <CardArticleImage key={idx} news={item} />
                        ))
                    }
                </div>
                <div>
                    <h1 className="font-bold text-3xl py-5">Design</h1>
                    <div className="grid grid-cols-3 gap-x-5 gap-y-10 border-b-2 pb-10">
                        {
                            news.filter((item) => item.section === "arts" && item.subsection === "design").slice(0, 0 + 3).map((item, idx) => (
                                <CardArticleImage key={idx} news={item} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-3xl py-5">Music</h1>
                    <div className="grid grid-cols-3 gap-x-5 gap-y-10 border-b-2 pb-10">
                        {
                            news.filter((item) => item.section === "arts" && item.subsection === "music").slice(4, 4 + 6).map((item, idx) => (
                                <CardArticleImage key={idx} news={item} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-3xl py-5 text-center">Television</h1>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-10 border-b-2 pb-10">
                        {
                            news.filter((item) => item.section === "arts" && item.subsection === "television").slice(4, 4 + 6).map((item, idx) => (
                                <CardArticleImage key={idx} news={item} />
                            ))
                        }
                    </div>
                </div>
                <MoreNewsContainer news={news} params={params}/>
            </div>
        </div>
    )
}