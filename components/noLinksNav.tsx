import Image from "next/image"
import Link from "next/link"

export default function NoLinksNav() {
    return (
        <nav className="bg-neutral-950 block overflow-x-hidden">
            <Link href="#" className="text-sm sm:text-xl md:text-4xl flex text-white justify-center items-center font-serif">
                <Image 
                    src="/cpa-logo.svg"
                    alt="CPA Logo"
                    className="w-6 h-6 sm:w-10 sm:h-10 m-2 md:w-12 md:h-12"
                    width={48}
                    height={48}
                    priority
                />
                <span>CoreCode Programming Academy</span> 
            </Link>
        </nav>
    )
}