import TopArticleOne from "./top-article/top-article-one";
import TopArticleTwo from "./top-article/top-article-two";
import TopArticleSports from "./top-article/top-article-sports";

export default function Top1Article({ news, page }: { news: News, page: string }) {
    return (
        (page === "home" || page === "science" || page === "arts" || page === "world" || page === "travel") ? (
            <TopArticleOne news={news} page={page}/>
        ) : (page === "business" || page === "fashion" || page === "movies" || page === "food") ? (
            <TopArticleTwo news={news} />
        ) : page === "sports" && (
            <TopArticleSports news={news} />
        )
    )
}