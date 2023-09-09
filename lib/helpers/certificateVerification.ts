export async function isVerified(id: string): Promise<{ 
    url: string, 
    verified: Boolean
}> {
    // let url: string = `https://cpawebsiteuser.blob.core.windows.net/cpa-certificates/${id}.jpg`
    let url: string = `https://cpa-certificates.blr1.cdn.digitaloceanspaces.com/${id}.jpg`

    const verified: Boolean = await fetch(url, {
        method: 'HEAD',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With"
        },
        cache: 'no-store'
    }).then((response) => (response.status == 200))
    .catch((error) => false)

    return { url, verified }
} 
