import NoLinksNav from "@/components/noLinksNav";
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: 'Certificate' 
}

async function GetCertificate({ id }: any) {
    let url = `https://cpawebsiteuser.blob.core.windows.net/cpa-certificates/${id}.jpg`
    
    const response = await fetch(url, {
        method: 'HEAD',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With"
        }
    });
    // old browser code
    // let http = new XMLHttpRequest();
    // http.open('HEAD', url, false)
    // http.setRequestHeader("Access-Control-Allow-Origin", "*") 
    // http.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With")
    // http.send()

    metadata.title = (response.status == 200) ? 'Certificate Verified' : 'Invalid Certificate'

    if (response.status == 200) {
        return (
            <div className="flex relative justify-center items-center bottom-0 h-[calc(100vh-64px)]">
                <div className="side w-[47vw] inline-flex flex-row-reverse">
                    <Image 
                        src={url}
                        alt="Certificate Image"
                        className="max-h-[90vh] w-auto z-10"
                        width={2422}
                        height={3370}
                    />
                </div>
                <div className="side w-[47vw] inline-block text-2xl">
                    <p className="w-3/5 p-4">
                        The CoreCode Programming Academy confirms that the certificate presented below has been issued to the student as indicated on the certificate, in recognition of their participation in the course.
                    </p>
                </div>
            </div>
        )
    }

    return (
         <div className="text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-4xl text-red-300">
            <h1>Invalid Certificate ID - {id}</h1>
        </div>
    )
}

export default function VerifyCertificatePage({ params }: any) {
    const { id } = params;
    return (
        <div className="bg-neutral-900 min-h-screen overflow-x-hidden">
            <NoLinksNav/>
            <Image
                src="/Lambda-path.svg"
                alt="lambda path"
                className="w-0 md:w-[90vw] max-h-[90vh] absolute -right-[30vw] top-[10vh] z-0"
                height={858}
                width={1196}
            />
            <GetCertificate id={id}/>
        </div>
    )
}
