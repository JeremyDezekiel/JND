import { News } from "@/types"

export const fetchNews = async (slug: string) => {
    const apikey = process.env.API_KEY
    const data = await fetch(`https://api.nytimes.com/svc/topstories/v2/${slug}.json?api-key=${apikey}`, {
        cache: 'no-store'
    })
    const news = await data.json()
    return news.results as News[]
}