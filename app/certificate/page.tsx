import Image from "next/image"
import { Metadata } from "next"
import NoLinksNav from "../../components/noLinksNav";

export const metadata: Metadata = {
    title: 'CPA Certificate',
    description: 'Certificate Verification System for CPA'
} 

export default function Certificate() {
    return (
        <div className="bg-neutral-900 min-h-screen overflow-x-hidden">
            <NoLinksNav />
            <div className="text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-2xl lg:text-4xl">
                <h1>No Certificate UID Provided</h1>
            </div>

            <Image
                src="/Lambda-path.svg"
                alt="lambda path"
                className="w-0 md:w-[90vw] max-h-[90vh] absolute -right-[30vw] top-[10vh]"
                height={858}
                width={1196}
            />
        </div>
    )
}