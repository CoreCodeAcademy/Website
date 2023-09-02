import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Certificate - CPA',
    description: 'Certificate Verification System for CPA'
} 

export default function Certificate() {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg md:text-2xl lg:text-4xl">
            <h1>No Certificate UID Provided</h1>
        </div>
    )
}