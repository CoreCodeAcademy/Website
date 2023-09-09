"use client";
import Image from "next/image";

export default function CertificateImage({ url }: { url: string }) {
    return <div className="side md:w-[47vw] inline-flex flex-row-reverse">
                <img 
                    src={url}
                    alt="Certificate Image"
                    className="max-h-[90vh] w-auto z-10"
                    width={2422}
                    height={3370}
                />
            </div>
};
