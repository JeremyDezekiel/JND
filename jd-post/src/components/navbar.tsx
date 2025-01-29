"use client"

import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [aside, setAside] = useState(false)

    const toggleAside = () => {
        setAside(prevValue => !prevValue)
    }

    return (
        <>
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
                    <Image
                        className="my-5 w-44 h-auto cursor-pointer"
                        src="/assets/dark-mode.png"
                        alt="Logo"
                        width={150}
                        height={50}
                        priority
                    />
                </div>
                <div className="flex justify-end gap-5">
                    <h1>Register</h1>
                    <h1>Sign In</h1>
                </div>
            </div>
            <div className="flex justify-center border-b-2">
                <button className="hover:bg-gray-700 p-2">Home</button>
                <button className="hover:bg-gray-700 p-2">News</button>
                <button className="hover:bg-gray-700 p-2">Sport</button>
                <button className="hover:bg-gray-700 p-2">Business</button>
                <button className="hover:bg-gray-700 p-2">Innovation</button>
                <button className="hover:bg-gray-700 p-2">Culture</button>
                <button className="hover:bg-gray-700 p-2">Arts</button>
                <button className="hover:bg-gray-700 p-2">Travel</button>
                <button className="hover:bg-gray-700 p-2">Earth</button>
                <button className="hover:bg-gray-700 p-2">Video</button>
                <button className="hover:bg-gray-700 p-2">Live</button>
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
                        <li className="p-2 border-b-[1px] cursor-pointer hover:bg-slate-600">News</li>
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