import Image from "next/image";

export default function Footer() {
    return (
        <div>
            <div className="container mx-auto">
                <Image
                    className="my-5 w-32 h-auto cursor-pointer"
                    src="/assets/dark-mode.png"
                    alt="Logo"
                    width={150}
                    height={50}
                    priority
                />
                <div className="flex gap-5 mb-5 border-b-2 pb-5">
                    <h5 className="cursor-pointer hover:underline">Home</h5>
                    <h5 className="cursor-pointer hover:underline">News</h5>
                    <h5 className="cursor-pointer hover:underline">Sport</h5>
                    <h5 className="cursor-pointer hover:underline">Business</h5>
                    <h5 className="cursor-pointer hover:underline">Innovation</h5>
                    <h5 className="cursor-pointer hover:underline">Culture</h5>
                    <h5 className="cursor-pointer hover:underline">Arts</h5>
                    <h5 className="cursor-pointer hover:underline">Travel</h5>
                    <h5 className="cursor-pointer hover:underline">Earth</h5>
                    <h5 className="cursor-pointer hover:underline">Video</h5>
                    <h5 className="cursor-pointer hover:underline">Live</h5>
                    <h5 className="cursor-pointer hover:underline">Audio</h5>
                    <h5 className="cursor-pointer hover:underline">Weather</h5>
                    <h5 className="cursor-pointer hover:underline">JND Shop</h5>
                </div>
                <div className="flex gap-10 items-center mb-5">
                    <h2>Follow JND on:</h2>
                    <div className="flex gap-5">
                        <img className="size-5 hover:border cursor-pointer" src="https://img.icons8.com/?size=100&id=YfCbGWCWcuar&format=png&color=FFFFFF" alt="X" />
                        <img className="size-5 hover:border cursor-pointer" src="https://img.icons8.com/?size=100&id=118468&format=png&color=FFFFFF" alt="facebook" />
                        <img className="size-5 hover:border cursor-pointer" src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" alt="instagram" />
                        <img className="size-5 hover:border cursor-pointer" src="https://img.icons8.com/?size=100&id=84521&format=png&color=FFFFFF" alt="tiktok" />
                        <img className="size-5 hover:border cursor-pointer" src="https://img.icons8.com/?size=100&id=37325&format=png&color=FFFFFF" alt="youtube" />
                    </div>
                </div>
                <ul className="flex gap-5 text-sm mb-5">
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
        </div>
    )
}