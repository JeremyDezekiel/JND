import CardArticle from "../cards/card-article";

export default function FourCardArticleCountainer({ news, startIndex }: { news: News[], startIndex: number}) {
    return (
        <section className="grid grid-cols-4 gap-5 py-10 border-b-2">
            {
                news.slice(startIndex, startIndex + 4).map((item, idx) => (
                    <CardArticle key={idx} news={item} />
                ))
            }
        </section>
    )
}