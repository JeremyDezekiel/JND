export const fetchNews = async (slug: string): Promise<News[]> => {
    const apikey = process.env.NEXT_PUBLIC_API_KEY
    const data = await fetch(`https://api.nytimes.com/svc/topstories/v2/${slug}.json?api-key=${apikey}`, {
        next: {
            revalidate: 3600
        }
    })

    if (!data.ok) {
        throw new Error("Failed to fetch data")
    }

    const server: Server = await data.json()
    let news: News[] = server.results
    news = news.filter(item => item.section !== "admin")
    news= news.filter(item => item.multimedia !== null)

    return news as News[]
}

export const searchFetchNews = async (search: string): Promise<ResultsSearch[]> => {
    const apikey = process.env.NEXT_PUBLIC_API_KEY
    const data = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${apikey}`)
    
    if (!data.ok) {
        throw new Error("Failed to fetch data")
    }

    const server: ServerSearch = await data.json()
    const serverResponse: Response = server.response
    let newsSearch: ResultsSearch[] = serverResponse.docs
    newsSearch = newsSearch.filter(item => item.multimedia !== null)
    newsSearch = newsSearch.filter(item => item.multimedia[0].url !== null)

    return newsSearch as ResultsSearch[]
}