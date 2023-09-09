import NoLinksNav from "@/components/noLinksNav"
import Image from "next/image"

export default function CertificateLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-neutral-900 min-h-screen overflow-x-hidden">
            <NoLinksNav/>
            <Image
                src="/Lambda-path.svg"
                alt="CPA Lambda"
                className="w-0 md:w-[90vw] max-h-[90vh] absolute -right-[30vw] top-[50vh] -translate-y-1/2 z-0 pointer-events-none"
                height={858}
                width={1196}
            />
            {children}
        </div>
    )
}