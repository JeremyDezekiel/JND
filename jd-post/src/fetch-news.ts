import { News } from "@/types"

export const fetchNews = async (page: string) => {
    const apikey = process.env.API_KEY
    const data = await fetch(`https://api.nytimes.com/svc/topstories/v2/${page}.json?api-key=${apikey}`)
    const news = await data.json()
    return news.results as News[]
}