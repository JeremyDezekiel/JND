"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import LiveTime from "./live-time"

export default function Navbar() {
    const pathname = usePathname()
    const [aside, setAside] = useState(false)
    const [search, setSearch] = useState('')

    const toggleAside = () => {
        setAside(prevValue => !prevValue)
        setSearch('')
    }

    return (
        <>
            <div className="sticky top-0 z-10 bg-white dark:bg-black">
                <div className="grid grid-cols-3 items-center px-5 border-b-2 border-black dark:border-white">
                    <div className="flex items-center gap-2">
                        {
                            aside === false ? (
                                <>
                                    <Menu
                                        className="cursor-pointer"
                                        size={35}
                                        onClick={toggleAside}
                                    />
                                    <Search
                                        className="cursor-pointer"
                                        onClick={toggleAside}
                                        size={35}
                                    />
                                </>
                            ) : (
                                <X
                                    className="cursor-pointer hover:bg-gray-700"
                                    size={35}
                                    onClick={toggleAside}
                                />
                            )
                        }
                    </div>
                    <div className="flex justify-center">
                        <div className="hidden dark:block">
                            <Link href="/">
                                <Image
                                    className="my-5 w-44 h-auto cursor-pointer"
                                    src="/assets/dark-mode.png"
                                    alt="logo-dark"
                                    width={150}
                                    height={50}
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="block dark:hidden">
                            <Link href="/">
                                <Image
                                    className="my-5 w-44 h-auto cursor-pointer"
                                    src="/assets/light-mode.png"
                                    alt="logo-light"
                                    width={150}
                                    height={50}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <LiveTime />
                    </div>
                </div>
                <div className="flex justify-center border-b-2 border-black dark:border-white">
                    <Link href="/" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/" || pathname === "/more-news/home" ? "border-b-2" : ""}`}>Home</Link>
                    <Link href="/section/sports"  className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/sports" || pathname === "/more-news/sports" ? "border-b-2" : ""}`}>Sports</Link>
                    <Link href="/section/business" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/business" || pathname === "/more-news/business" ? "border-b-2" : ""}`}>Business</Link>
                    <Link href="/section/fashion" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/fashion" || pathname === "/more-news/fashion" ? "border-b-2" : ""}`}>Fashion</Link>
                    <Link href="/section/science" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/science" || pathname === "/more-news/science" ? "border-b-2" : ""}`}>Science</Link>
                    <Link href="/section/arts" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/arts" || pathname === "/more-news/arts" ? "border-b-2" : ""}`}>Arts</Link>
                    <Link href="/section/movies" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/movies" || pathname === "/more-news/movies" ? "border-b-2" : ""}`}>Movies</Link>
                    <Link href="/section/world" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/world" || pathname === "/more-news/world" ? "border-b-2" : ""}`}>World</Link>
                    <Link href="/section/food" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/food" || pathname === "/more-news/food" ? "border-b-2" : ""}`}>Food</Link>
                    <Link href="/section/travel" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/travel" || pathname === "/more-news/travel" ? "border-b-2" : ""}`}>Travel</Link>
                </div>
            </div>
            <div
                className={`fixed top-24 bg-white text-black left-0 z-50 w-fit h-screen transition-transform duration-300 ease-in-out transform ${aside ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-2 dark:bg-gray-700 bg-gray-300">
                    <form className="flex items-center group w-fit border hover:border-black">
                        <input
                            className="p-2 w-60 focus:outline-black"
                            placeholder="Search news, topics and more"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Link
                            href="/search"
                            className="px-5 py-2 group-hover:dark:bg-slate-500 group-hover:bg-slate-800 bg-black text-white dark:bg-gray-700"
                            type="submit"
                            // disabled={!search}
                            onClick={() => {
                                    setSearch('')
                                    setAside(false)
                                }
                            }
                        >
                            <Search />
                        </Link>
                    </form>
                </div>
                <div className="my-5 flex flex-col">
                    <Link href="/" className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/" || pathname === "/more-news/home" ? "border-s-8 border-black" : "mx-2"}`}>Home</Link>
                    <Link href="/section/sports"  className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/sports" || pathname === "/more-news/sports" ? "border-s-8 border-black" : "mx-2"}`}>Sports</Link>
                    <Link href="/section/business" className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/business" || pathname === "/more-news/business" ? "border-s-8 border-black" : "mx-2"}`}>Business</Link>
                    <Link href="/section/fashion" className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/fashion" || pathname === "/more-news/fashion" ? "border-s-8 border-black" : "mx-2"}`}>Fashion</Link>
                    <Link href="/section/science" className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/science" || pathname === "/more-news/science" ? "border-s-8 border-black" : "mx-2"}`}>Science</Link>
                    <Link href="/section/arts" className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/arts" || pathname === "/more-news/arts" ? "border-s-8 border-black" : "mx-2"}`}>Arts</Link>
                    <Link href="/section/movies" className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/movies" || pathname === "/more-news/movies" ? "border-s-8 border-black" : "mx-2"}`}>Movies</Link>
                    <Link href="/section/world" className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/world" || pathname === "/more-news/world" ? "border-s-8 border-black" : "mx-2"}`}>World</Link>
                    <Link href="/section/food" className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/food" || pathname === "/more-news/food" ? "border-s-8 border-black" : "mx-2"}`}>Food</Link>
                    <Link href="/section/travel" className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/travel" || pathname === "/more-news/travel" ? "border-s-8 border-black" : "mx-2"}`}>Travel</Link>
                </div>
            </div>
            <div className={`fixed top-24 bg-white text-black left-1/2 right-1/2 z-50 w-fit h-screen transition-transform duration-300 ease-in-out transform ${search ? "translate-y-0" : "translate-y-full"}`}>
                
            </div>
        </>
    )
}