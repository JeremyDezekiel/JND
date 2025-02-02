import { Circle } from "lucide-react";

export default function CardTitle({ news }: { news: News }) {
    return (
        <a href={news.url} target="_blank" rel="noopener noreferrer" className="h-fit">
            <div className="flex gap-3 items-center group cursor-pointer">
                <Circle size={15} className="bg-black rounded-full" />
                <h1 className="font-bold text-lg group-hover:underline">{news.title}</h1>
            </div>
        </a>
    )
}