import { fetchNews } from "@/fetch-news"
import MainSports from "@/components/components-pages/main-sports"
import MainLayoutOne from "@/components/components-pages/main-layout-one"
import MainLayoutTwo from "@/components/components-pages/main-layout-two"
import MainLayoutThree from "@/components/components-pages/main-layout-three"
import MainLayoutFour from "@/components/components-pages/main-layout-four"

export default async function Section({ params }: { params: { slug: string } }) {
    const news = await fetchNews(params.slug)

    return (
        (params.slug === "business" || params.slug === "movies") ? (
            <MainLayoutTwo news={news} params={params.slug} />
        ) : (params.slug === "fashion" || params.slug === "food") ? (
            <MainLayoutThree news={news} params={params.slug} />
        ) : (params.slug === "science" || params.slug === "travel") ? (
            <MainLayoutOne news={news} params={params.slug} />
        ) : (params.slug === "arts" || params.slug === "world") ? (
            <MainLayoutFour news={news} params={params.slug} />
        ) : params.slug === "sports" && (
            <MainSports news={news} params={params.slug} />
        )
    )
}