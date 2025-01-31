"use client"

import { Menu, Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname()
    const [aside, setAside] = useState(false)

    const toggleAside = () => {
        setAside(prevValue => !prevValue)
    }

    return (
        <>
            <div className="sticky top-0 z-10 bg-white dark:bg-black">
                <div className="grid grid-cols-3 items-center px-5 border-b-2">
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
                        <Link href="/">
                            <Image
                                className="my-5 w-44 h-auto cursor-pointer"
                                src="/assets/dark-mode.png"
                                alt="Logo"
                                width={150}
                                height={50}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="flex justify-end gap-5">
                        <button className="bg-white hover:bg-gray-300 text-black font-semibold px-3 py-2">Register</button>
                        <button className="hover:bg-white hover:text-black font-semibold px-3 py-2">Sign In</button>
                    </div>
                </div>
                <div className="flex justify-center border-b-2">
                    <Link href="/" className={`hover:bg-gray-700 p-2 ${pathname === "/" || pathname === "/more-news/home" ? "border-b-2" : ""}`}>Home</Link>
                    <Link href="/section/sports"  className={`hover:bg-gray-700 p-2 ${pathname === "/section/sports" || pathname === "/more-news/sports" ? "border-b-2" : ""}`}>Sports</Link>
                    <Link href="/section/business" className={`hover:bg-gray-700 p-2 ${pathname === "/section/business" || pathname === "/more-news/business" ? "border-b-2" : ""}`}>Business</Link>
                    <button className="hover:bg-gray-700 p-2">Innovation</button>
                    <button className="hover:bg-gray-700 p-2">Culture</button>
                    <Link href="/section/arts" className={`hover:bg-gray-700 p-2 ${pathname === "/section/arts" || pathname === "/more-news/arts" ? "border-b-2" : ""}`}>Arts</Link>
                    <button className="hover:bg-gray-700 p-2">Travel</button>
                    <button className="hover:bg-gray-700 p-2">Earth</button>
                    <button className="hover:bg-gray-700 p-2">Video</button>
                    <button className="hover:bg-gray-700 p-2">Live</button>
                </div>
            </div>
            <div
                className={`fixed top-24 bg-white text-black left-0 z-50 w-fit h-screen transition-transform duration-300 ease-in-out transform ${aside ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-2 bg-gray-700">
                    <form className="flex items-center group w-fit border hover:border-black">
                        <input
                            className="p-2 w-60 focus:outline-black"
                            placeholder="Search news, topics and more"
                        />
                        <button
                            className="px-5 py-2 group-hover:bg-slate-500"
                            type="submit"
                        >
                            <Search />
                        </button>
                    </form>
                </div>
                <div className="my-5">
                    <ul>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Home</li>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Sport</li>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Business</li>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Innovation</li>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Culture</li>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Arts</li>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Travel</li>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Earth</li>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Video</li>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Live</li>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Audio</li>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Weather</li>
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">Newsletters</li>
                    </ul>
                </div>
            </div>
        </>
    )
}