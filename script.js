let btn = document.querySelector("button")
let meme_area = document.querySelector(".meme-area")
let api_address = "https://meme-api.com/gimme"


async function meme_fetch() {
    try {
        response = await fetch(api_address)
    } catch (error) {
        console.log("ERROR")
    }

    img = document.createElement("img")

    data = await response.json()
    img.setAttribute("src",data["url"])
    img.setAttribute("height","400px")
    img.setAttribute("width","400px")
    meme_area.appendChild(img)

    btn.addEventListener("click", () => {
        meme_area.removeChild(img)
    })
}

btn.addEventListener("click",meme_fetch);