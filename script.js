function toogleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const image = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        image.setAttribute('src', '/assets/armando com óculos.jpg')
        image.setAttribute('alt', 'Armando de óculos escuros')
    } else{
        image.setAttribute('src', '/assets/Foto rosto.jpeg')
        image.setAttribute('alt', 'Armando sem óculos escuros')
    }
}