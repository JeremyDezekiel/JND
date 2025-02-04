"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname()

    return (
        <footer>
            <div className="container mx-auto">
                <div className="hidden dark:flex">
                    <Link href="/">
                        <Image
                            className="my-5 w-32 h-auto cursor-pointer"
                            src="/assets/dark-mode.png"
                            alt="logo-dark"
                            width={150}
                            height={50}
                            priority
                        />
                    </Link>
                </div>
                <div className="flex dark:hidden">
                    <Link href="/">
                        <Image
                            className="my-5 w-32 h-auto cursor-pointer"
                            src="/assets/light-mode.png"
                            alt="logo-light"
                            width={150}
                            height={50}
                            priority
                        />
                    </Link>
                </div>
                <div className="flex gap-5 mb-5 border-b-2 pb-5 flex-col lg:flex-row">
                    <Link href="/" className={`hover:underline ${pathname === "/" || pathname === "/more-news/home" ? "underline" : ""}`}>Home</Link>
                    <Link href="/section/sports" className={`hover:underline ${pathname === "/section/sports" || pathname === "/more-news/sports" ? "underline" : ""}`}>Sports</Link>
                    <Link href="/section/business" className={`hover:underline ${pathname === "/section/business" || pathname === "/more-news/business" ? "underline" : ""}`}>Business</Link>
                    <Link href="/section/fashion" className={`hover:underline ${pathname === "/section/fashion" || pathname === "/more-news/fashion" ? "underline" : ""}`}>Fashion</Link>
                    <Link href="/section/science" className={`hover:underline ${pathname === "/section/science" || pathname === "/more-news/science" ? "underline" : ""}`}>Science</Link>
                    <Link href="/section/arts" className={`hover:underline ${pathname === "/section/arts" || pathname === "/more-news/arts" ? "underline" : ""}`}>Arts</Link>
                    <Link href="/section/movies" className={`hover:underline ${pathname === "/section/movies" || pathname === "/more-news/movies" ? "underline" : ""}`}>Movies</Link>
                    <Link href="/section/world" className={`hover:underline ${pathname === "/section/world" || pathname === "/more-news/world" ? "underline" : ""}`}>World</Link>
                    <Link href="/section/food" className={`hover:underline ${pathname === "/section/food" || pathname === "/more-news/food" ? "underline" : ""}`}>Food</Link>
                    <Link href="/section/travel" className={`hover:underline ${pathname === "/section/travel" || pathname === "/more-news/travel" ? "underline" : ""}`}>Travel</Link>
                </div>
                <div className="flex gap-10 items-center mb-5">
                    <h2>Follow JND on:</h2>
                    <div className="flex gap-5">
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                            <img className="size-5 hover:border cursor-pointer" src="https://img.icons8.com/?size=100&id=YfCbGWCWcuar&format=png&color=FFFFFF" alt="X" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img className="size-5 hover:border cursor-pointer" src="https://img.icons8.com/?size=100&id=118468&format=png&color=FFFFFF" alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img className="size-5 hover:border cursor-pointer" src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" alt="instagram" />
                        </a>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                            <img className="size-5 hover:border cursor-pointer" src="https://img.icons8.com/?size=100&id=84521&format=png&color=FFFFFF" alt="tiktok" />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <img className="size-5 hover:border cursor-pointer" src="https://img.icons8.com/?size=100&id=37325&format=png&color=FFFFFF" alt="youtube" />
                        </a>
                    </div>
                </div>
                <ul className="lg:flex gap-5 text-sm mb-5 grid grid-cols-3">
                    <li className="cursor-pointer hover:underline">Terms of Use</li>
                    <li className="cursor-pointer hover:underline">About the JND</li>
                    <li className="cursor-pointer hover:underline">Privacy Policy</li>
                    <li className="cursor-pointer hover:underline">Cookies</li>
                    <li className="cursor-pointer hover:underline">Accessibility Help</li>
                    <li className="cursor-pointer hover:underline">Contact the JND</li>
                    <li className="cursor-pointer hover:underline">Advertise with us</li>
                    <li className="cursor-pointer hover:underline">Do not share or sell my info</li>
                    <li className="cursor-pointer hover:underline">Contact technical support</li>
                </ul>
                <p className="mb-5">Copyright 2025 JDN. All rights reserved. The JDN is not responsible for the content of external sites. <b className="cursor-pointer">Read about our approach to external linking.</b></p>
            </div>
        </footer>
    )
}