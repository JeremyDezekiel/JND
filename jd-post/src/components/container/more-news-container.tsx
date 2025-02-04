import { ChevronRight } from "lucide-react"
import CardNewsWithoutArticle from "../cards/card-news-without-article"
import Link from "next/link"

export default function MoreNewsContainer({ news, params, startIndex }: { news: News[], params: string, startIndex: number }) {
    return (
        <div className={`gap-5 flex flex-col ${params === "fashion" || params === "food" ? startIndex === 3 ? "py-10 border-b-2" : "py-12" : "py-12"}`}>
            {
                (params === "fashion" || params === "food") && startIndex === 3 ? (
                    <h1 className="font-bold text-3xl">In the news</h1>
                ) : (
                    <div className="flex items-center group w-fit cursor-pointer">
                        <Link href={`/more-news/${params}`} className="font-bold text-2xl group-hover:underline">More news</Link>
                        <ChevronRight size={40} />
                    </div >
                )
            }
            <div className="lg:grid lg:grid-cols-5 gap-5 flex flex-col">
                {
                    news.slice(startIndex, startIndex + 5).map((item, idx) => (
                        <CardNewsWithoutArticle key={idx} news={item} />
                    ))
                }
            </div>
        </div >
    )
}