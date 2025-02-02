import MoreNewsPagination from "@/components/more-news-pagination"
import { fetchNews } from "@/fetch-news"

export default async function MainMoreAllNews({ params }: { params: { slug: string } }) {
    const news = await fetchNews(params.slug)

    return (
        <div>
            <div className="container mx-auto my-10">
                <div className="flex items-center gap-3 w-fit">
                    {
                        params.slug !== "home" ? (
                            <h1 className="font-bold text-4xl border-b-2">{params.slug.toUpperCase()}</h1>
                        ) : (
                            <h1 className="font-bold text-4xl border-b-2">News</h1>
                        )
                    }
                    <span className="relative flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
                    </span>
                </div>
                <MoreNewsPagination news={news} />
            </div>
            <div className="border-y-2 h-10">

            </div>
        </div>
    )
}