import { fetchNews } from "@/fetch-news"
import MainLayoutOne from "@/components/components-pages/main-layout-one"

const page = "home"

export default async function Home() {
  const news = await fetchNews(page)

  return (
    <MainLayoutOne news={news} params="home" />
  )
}
