import MainArts from "@/components/components-pages/main-arts"
import MainBusiness from "@/components/components-pages/main-business"
import MainSports from "@/components/components-pages/main-sports"
import { fetchNews } from "@/fetch-news"

export default async function Section({ params }: { params: { slug: string } }) {
    const news = await fetchNews(params.slug)

    return (
        params.slug === "sports" ? (
            <MainSports news={news} params={params.slug}/>
        ) : params.slug === "arts" ? (
            <MainArts news={news} params={params.slug} />
        ) : params.slug === "business" && (
            <MainBusiness news={news} params={params.slug} />
        )
    )
}