import NoLinksNav from "@/components/noLinksNav";
import { Metadata } from "next"
import Image from "next/image"

type Props = {
    params: {
        id: string
    }
}

const revalidateTime: number = 60; // time for caching in seconds

async function isVerified(id: string): Promise<{ 
    url: string, 
    verified: Boolean
}> {
    let url = `https://cpawebsiteuser.blob.core.windows.net/cpa-certificates/${id}.jpg`

    const verified: Boolean = await fetch(url, {
        method: 'HEAD',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With"
        },
        next: {
            revalidate: revalidateTime
        }
    }).then((response) => (response.status == 200))
    .catch((error) => false)

    return { url, verified }
} 

async function GetCertificate({ id }: any) {
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

export default function VerifyCertificatePage({ params }: Props) {
    const { id } = params

    return (
        <div className="bg-neutral-900 min-h-screen overflow-x-hidden">
            <NoLinksNav/>
            <Image
                src="/Lambda-path.svg"
                alt="lambda path"
                className="w-0 md:w-[90vw] max-h-[90vh] absolute -right-[30vw] top-[50vh] -translate-y-1/2 z-0 pointer-events-none"
                height={858}
                width={1196}
            />
            <GetCertificate id={id}/>
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
