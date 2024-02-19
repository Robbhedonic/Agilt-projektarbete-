let getdata = async(apilink) => {
    let data = await fetch(apilink)
    let json = await data.json()
    console.log(data)
}

getdata("https://zenquotes.io/api/quotes/")