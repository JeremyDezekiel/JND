import { ChevronRight } from "lucide-react"
import CardNewsWithoutArticle from "./card-news-without-article"
import { News } from "@/types"
import Link from "next/link"

export default function MoreNewsContainer({ news, params }: { news: News[], params: string}) {
    return (
        <div className="py-12 gap-5 flex flex-col">
            <div className="flex items-center group w-fit cursor-pointer">
                <Link href={`/more-news/${params}`} className="font-bold text-2xl group-hover:underline">More news</Link>
                <ChevronRight size={40} />
            </div>
            <div className="grid grid-cols-5 gap-5">
                {
                    news.slice(8, 8 + 5).map((item, idx) => (
                        <CardNewsWithoutArticle key={idx} news={item} />
                    ))
                }
            </div>
        </div>
    )
}