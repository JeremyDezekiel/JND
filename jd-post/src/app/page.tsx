// import Image from "next/image";
import Top1Article from "@/components/top-1-article"
import CardArticleImage from "@/components/card-article-image"
import { fetchNews } from "@/fetch-news"
import { ChevronRight } from "lucide-react"
import CardArticle from "@/components/card-article"
import CardNewsWithoutArticle from "@/components/card-news-without-article"
import Link from "next/link"

const page = "home"

export default async function Home() {
  const news = await fetchNews(page)

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="https://nextjs.org/icons/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="https://nextjs.org/icons/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    <div className="dark:text-white text-black">
      <div className="container mx-auto py-5 grid grid-cols-4 gap-5 border-b-2">
        <div className="flex flex-col gap-5">
          {
            news.slice(1, 1 + 2).map((item, idx) => (
              <CardArticleImage key={idx} news={item}/>
            ))
          }
        </div>
        <div className="col-span-2">
          <Top1Article news={news[0]} page={page}/>
        </div>
        <div className="flex flex-col gap-5">
          {
            news.slice(3, 3 + 4).map((item, idx) => (
              <CardArticle key={idx} news={item}/>
            ))
          }
        </div>
      </div>
      <div className="container mx-auto py-12 gap-5 flex flex-col border-b-2">
        <h1 className="font-bold text-3xl">Only from the JND</h1>
        <div className="grid grid-cols-2 gap-5">
          {
            news.slice(7, 7 + 2).map((item, idx) => (
              <CardArticleImage key={idx} news={item}/>
            ))
          }
        </div>
      </div>
      <div className="container mx-auto">
        <div className="py-12 gap-5 flex flex-col">
          <div className="flex items-center group w-fit cursor-pointer">
            <Link href="/more-news/home" className="font-bold text-2xl group-hover:underline">More news</Link>
            <ChevronRight size={40}/>
          </div>
          <div className="grid grid-cols-5 gap-5">
            {
              news.slice(9, 9 + 5).map((item, idx) => (
                <CardNewsWithoutArticle key={idx} news={item}/>
              ))
            }
          </div>
        </div>
      </div>
      <div className="border-y-2 h-10">

      </div>
    </div>
  );
}
