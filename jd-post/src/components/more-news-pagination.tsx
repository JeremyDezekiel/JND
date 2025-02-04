"use client"

import CardMoreNews from "@/components/cards/card-more-news"
import { useState } from "react";

export default function MoreNewsPagination({ news }: { news: News[] }) {

    const [maxNews, setMaxNews] = useState(10)

    return (
        <div className="flex flex-col gap-10 justify-center mx-4 sm:mx-10 lg:mx-40 mt-10">
            {
                news.slice(0, maxNews).map((item, idx) => (
                    <CardMoreNews key={idx} news={item} />
                ))
            }
            {
                maxNews < news.length && (
                    <button
                        className="border py-2 px-5 rounded-lg w-fit self-center sm:self-end hover:bg-white hover:text-black"
                        onClick={() => setMaxNews(prevValue => prevValue + 10)}
                        disabled={maxNews >= news.length}
                    >
                        Load More
                    </button>
                )
            }
        </div>
    )
}