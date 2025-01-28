import { Menu, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-5">
            <div className="flex gap-2">
                <Menu className="cursor-pointer"/>
                <Search/>
            </div>
            <div>
                <Image
                    className="my-5"
                    src="/assets/logo.png"
                    alt="Logo"
                    width={150}
                    height={50}
                    priority
                />
            </div>
            <div className="flex gap-5">
                <h1>Register</h1>
                <h1>Sign In</h1>
            </div>
        </div>
    )
}