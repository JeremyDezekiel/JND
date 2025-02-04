"use client"

import CardSearchPage from "@/components/cards/card-search-page"
import SkeletonCardSearch from "@/components/cards/skeleton-card-search"
import { searchFetchNews } from "@/fetch-news"
import { Search } from "lucide-react"
import { useState } from "react"

export default function SearchPage() {

    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")
    const [resultSearch, setResultSearch] = useState<ResultsSearch[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        try {
            if (!search) {
                return setError("Insert a query")
            }
            const news = await searchFetchNews(search)
            setResultSearch(news)
            setSearch("")
        } catch (error: unknown) {
            console.error(error, "Error fetching news:")
            setError("Failed to fetch news. Please try again later.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div className="container mx-auto my-10">
                <div>
                    <form className="flex h-16 group" onSubmit={handleSearch}>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            value={search}
                            onChange={(e) => handleChange(e)}
                            className="flex-1 px-2 text-black border-black dark:border-gray-500 outline-none border-y-[1px] border-s-[1px] group-hover:border-y-[3px] group-hover:border-s-[3px] focus:border-y-[3px] focus:border-s-[3px] hover:border-y-[3px] hover:border-s-[3px]"
                            placeholder="Search news, topics and more"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white px-5 hover:bg-slate-800"
                        >
                            <Search />
                        </button>
                    </form>
                </div>
                <div>
                    {loading ? (
                        [...Array(3)].map((_, idx) => (
                            <SkeletonCardSearch key={idx} />
                        ))
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : resultSearch.length > 0 ? (
                        resultSearch.map((item) => (
                            <CardSearchPage key={item._id} news={item} />
                        ))
                    ) : (
                        <h1 className="font-bold text-2xl lg:text-4xl mt-10">
                            Please search for news, topics, and more.
                        </h1>
                    )}
                </div>
            </div>
            <div className="border-y-2 h-10">

            </div>
        </div>
    )
}