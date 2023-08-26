const main = document.getElementById("main")
const img = document.getElementById("img")
const searchParams = new URLSearchParams(window.location.search)

console.log(searchParams)

function mainFunction() {
    if (!searchParams.has("cuid")) {
        let text = document.createElement('h1')
        text.innerText = "No Certificate UID Provided"

        main.appendChild(text)

        return
    } 
    
    let cuid = searchParams.get("cuid")
    // let url = `/generated-certificates/${cuid}.jpg`
    let url = `https://cpawebsiteuser.blob.core.windows.net/cpa-certificates/${cuid}.jpg`
    
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false)
    http.setRequestHeader("Access-Control-Allow-Origin", "*") 
    http.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With")
    http.send()
    
    // let http = {status: 200}

    if (http.status != 200) {
        let text = document.createElement('h1')
        text.innerText = "Invalid Certificate ID"
    
        main.appendChild(text)
        
        return
    }
    
    let cert = document.createElement("img")
    cert.src = url
        
    img.appendChild(cert)

    let text = document.createElement('p')
    text.innerText = "The CoreCode Programming Academy confirms that the certificate presented below has been issued to the student as indicated on the certificate, in recognition of their participation in the course."

    main.appendChild(text)
}

mainFunction() // execute the function
