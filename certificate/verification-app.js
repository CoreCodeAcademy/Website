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
    let url = `/generated-certificates/${cuid}.jpg`
    
    let http = new XMLHttpRequest();
    
    http.open('HEAD', url, false)
    http.send()
    
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
    text.innerText = "CoreCode Programming academy verifies that the below ceritificate is issued to the student mentioned in the certificate, for successfully participating the course"

    main.appendChild(text)
}

mainFunction() // execute the function
