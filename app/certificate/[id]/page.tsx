import type { Metadata } from "next"
import Image from "next/image"
import { isVerified } from "@/lib/helpers/certificateVerification"

type Props = {
    params: {
        id: string
    }
}

export default async function VerifyCertificatePage({ params }: Props) {
    const { id } = params
    const { url, verified } = await isVerified(id);
    
    if (verified) {
        return (
            <div className="flex flex-col-reverse relative md:flex-row md:justify-center items-center md:h-[calc(100vh-64px)]">
                <div className="side md:w-[47vw] inline-flex flex-row-reverse">
                    <Image 
                        src={url}
                        alt="Certificate Image"
                        className="max-h-[90vh] w-auto z-10"
                        width={2422}
                        height={3370}
                    />
                </div>
                <div className="side md:w-[47vw] inline-block text-sm md:text-lg lg:text-2xl">
                    <p className="text-center md:text-left md:w-3/5 p-4">
                        The CoreCode Programming Academy confirms that the certificate presented below has been issued to the student as indicated on the certificate, in recognition of their participation in the course.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg md:text-2xl lg:text-4xl text-red-300">
            <h1>Invalid Certificate ID - {id}</h1>
        </div>
    )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = params
    const { verified } = await isVerified(id)

    return {
        title: verified ? "Certificate Verified" : "Invalid Certificate"
    }
}
