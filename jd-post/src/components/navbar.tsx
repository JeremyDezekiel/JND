"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import LiveTime from "./live-time"

export default function Navbar() {
    const pathname = usePathname()
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => {
        setSidebar(prevValue => !prevValue)
    }

    return (
        <>
            <nav className="sticky top-0 z-10 bg-white dark:bg-black hidden lg:block">
                <div className="grid grid-cols-3 items-center px-5 border-b-2 border-black dark:border-white">
                    <div className="me-auto">
                        <LiveTime />
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
                    <div className="ms-auto">
                        <Link href="/search" className={`${pathname === "/search" ? "hidden" : ""}`}>
                            <Search
                                className="cursor-pointer"
                                size={35}
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center border-b-2 border-black dark:border-white">
                    <Link href="/" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/" || pathname === "/more-news/home" ? "border-b-2" : ""}`}>Home</Link>
                    <Link href="/section/sports" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/sports" || pathname === "/more-news/sports" ? "border-b-2" : ""}`}>Sports</Link>
                    <Link href="/section/business" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/business" || pathname === "/more-news/business" ? "border-b-2" : ""}`}>Business</Link>
                    <Link href="/section/fashion" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/fashion" || pathname === "/more-news/fashion" ? "border-b-2" : ""}`}>Fashion</Link>
                    <Link href="/section/science" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/science" || pathname === "/more-news/science" ? "border-b-2" : ""}`}>Science</Link>
                    <Link href="/section/arts" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/arts" || pathname === "/more-news/arts" ? "border-b-2" : ""}`}>Arts</Link>
                    <Link href="/section/movies" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/movies" || pathname === "/more-news/movies" ? "border-b-2" : ""}`}>Movies</Link>
                    <Link href="/section/world" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/world" || pathname === "/more-news/world" ? "border-b-2" : ""}`}>World</Link>
                    <Link href="/section/food" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/food" || pathname === "/more-news/food" ? "border-b-2" : ""}`}>Food</Link>
                    <Link href="/section/travel" className={`hover:dark:bg-gray-700 hover:bg-gray-200 p-2 border-black dark:border-white ${pathname === "/section/travel" || pathname === "/more-news/travel" ? "border-b-2" : ""}`}>Travel</Link>
                </div>
            </nav>
            <nav className="sticky top-0 z-10 bg-white dark:bg-black block lg:hidden">
                <div className="grid grid-cols-3 items-center px-5 border-b-2 border-black dark:border-white">
                    <div className="flex items-center gap-2">
                        {
                            sidebar === false ? (
                                <Menu
                                    className="cursor-pointer"
                                    size={35}
                                    onClick={toggleSidebar}
                                />
                            ) : (
                                <X
                                    className="cursor-pointer hover:bg-gray-700"
                                    size={35}
                                    onClick={toggleSidebar}
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
                    <div className="ms-auto">
                        <Link href="/search" className={`${pathname === "/search" ? "hidden" : ""}`}>
                            <Search
                                className="cursor-pointer"
                                size={35}
                            />
                        </Link>
                    </div>
                </div>
            </nav>
            <div
                className={`fixed top-20 bg-white text-black left-0 z-50 w-screen h-screen transition-transform duration-300 ease-in-out transform ${sidebar ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="mb-5 flex flex-col">
                    <Link
                        href="/"
                        className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/" || pathname === "/more-news/home" ? "border-s-8 border-black" : "mx-2"}`}
                        onClick={() => setSidebar(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/section/sports"
                        className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/sports" || pathname === "/more-news/sports" ? "border-s-8 border-black" : "mx-2"}`}
                        onClick={() => setSidebar(false)}
                    >
                        Sports
                    </Link>
                    <Link
                        href="/section/business"
                        className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/business" || pathname === "/more-news/business" ? "border-s-8 border-black" : "mx-2"}`}
                        onClick={() => setSidebar(false)}
                    >
                        Business
                    </Link>
                    <Link
                        href="/section/fashion"
                        className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/fashion" || pathname === "/more-news/fashion" ? "border-s-8 border-black" : "mx-2"}`}
                        onClick={() => setSidebar(false)}
                    >
                        Fashion
                    </Link>
                    <Link
                        href="/section/science" className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/science" || pathname === "/more-news/science" ? "border-s-8 border-black" : "mx-2"}`}
                        onClick={() => setSidebar(false)}
                    >
                        Science
                    </Link>
                    <Link
                        href="/section/arts" className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/arts" || pathname === "/more-news/arts" ? "border-s-8 border-black" : "mx-2"}`}
                        onClick={() => setSidebar(false)}
                    >
                        Arts
                    </Link>
                    <Link
                        href="/section/movies"
                        className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/movies" || pathname === "/more-news/movies" ? "border-s-8 border-black" : "mx-2"}`}
                        onClick={() => setSidebar(false)}
                    >
                        Movies
                    </Link>
                    <Link
                        href="/section/world"
                        className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/world" || pathname === "/more-news/world" ? "border-s-8 border-black" : "mx-2"}`}
                        onClick={() => setSidebar(false)}
                    >
                        World
                    </Link>
                    <Link
                        href="/section/food"
                        className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/food" || pathname === "/more-news/food" ? "border-s-8 border-black" : "mx-2"}`}
                        onClick={() => setSidebar(false)}
                    >
                        Food
                    </Link>
                    <Link
                        href="/section/travel"
                        className={`p-2 border-b-[1px] cursor-pointer hover:bg-slate-300 ${pathname === "/section/travel" || pathname === "/more-news/travel" ? "border-s-8 border-black" : "mx-2"}`}
                        onClick={() => setSidebar(false)}
                    >
                        Travel
                    </Link>
                </div>
            </div>
        </>
    )
}