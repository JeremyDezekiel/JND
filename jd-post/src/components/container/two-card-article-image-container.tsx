import CardArticleImage from "../cards/card-article-image";

export default function TwoCardArticleImageContainer({ news, startIndex, page }: { news: News[], startIndex: number, page: string}) {
    return (
        <section className=" py-10 gap-5 flex flex-col border-b-2">
            {
                page === "business" ? (
                    <h1 className="font-bold text-4xl">Analysis</h1>
                ) : (page === "fashion" || page === "arts" || page === "food") ? (
                    ""
                ) : (
                    <h1 className="font-bold text-3xl">Only from the JND</h1>
                )
            }
            <div className="lg:grid lg:grid-cols-2 gap-5 flex flex-col">
                {
                    news.slice(startIndex, startIndex + 2).map((item, idx) => (
                        <CardArticleImage key={idx} news={item} page={page} />
                    ))
                }
            </div>
        </section>
    )
}