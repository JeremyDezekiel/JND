import CardMoreNews from "@/components/card-more-news"
import { fetchNews } from "@/fetch-news"

export default async function MainMoreAllNews({ params }: { params: { slug: string } }) {
    const news = await fetchNews(params.slug)

    return (
        <div>
            <div className="container mx-auto my-10 py-10 border-y-2">
                <div className="flex items-center gap-3 w-fit">
                    <h1 className="font-bold text-4xl border-b-2">More News</h1>
                    <span className="relative flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
                    </span>
                </div>
                <div className="flex flex-col gap-10 justify-center mx-40 mt-10">
                    {
                        news.slice(0).map((item, idx) => (
                            <CardMoreNews key={idx} news={item} />
                        ))
                    }
                    <button
                        className="border py-2 px-5 rounded-lg w-fit self-end"
                    >
                        More Page
                    </button>
                </div>
            </div>
        </div>
    )
}