const main = document.getElementById("main")
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
    
    let img = document.createElement("img")
    img.src = url
        
    main.appendChild(img)

    let text = document.createElement('h1')
    text.innerText = "This Certificate is verified by us"

    main.appendChild(text)
}

mainFunction() // execute the function
