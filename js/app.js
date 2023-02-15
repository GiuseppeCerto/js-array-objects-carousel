
const slideElements = document.getElementsByClassName('slide')

let indexActiveSlide = 0

const slideImages = [
    {
        image: './img/img-1.jpeg',
        title: "Guard ò mar quant'è bell",
        text: 'Mare del folfo di Napoli in tempresta',
    },    
    {
        image: './img/img-2.jpeg',
        title: "Pinocchio, atto primo.",
        text: 'Tavole del patio da spazzare',
    },
    {
        image: './img/img-3.jpeg',
        title: "AUGH!.",
        text: 'Scaccia sogni di età pre coloniale',
    },
    {
        image: './img/img-4.jpeg',
        title: "Mbare! L'etna si sta svegliando!",
        text: 'Altopiano vulcanico siculo in prospettiva',
    },
    {
        image: './img/img-5.jpg',
        title: "Chi me l'ha fatto fare",
        text: 'Cercando di studiare js',
    },
    {
        image: './img/img-6.jpg',
        title: "3,2,1, Buon anno!",
        text: 'Festeggiamenti di capodanno in Wyoming',
    },
]

const carouselSection = document.getElementById('carousel-section')

let htmlItem

for (let i = 0; i < slideImages.length; i++) {
	const slide = slideImages[i]
	const image = slide.image
	const title = slide.title
    const text = slide.text

    let srcImage = slideImages[i]

    console.log(slideImages[i])
    
    if (i === 0){
    
        htmlItem =
        `
        <div class="slide active">
            <img src="${image}" class="card-img-top rounded mt-3" alt="#">
            <h5 class="img-title">${title}</h5>
            <p class="img-text">${text}</p>
        </div>
        `
    
    }else {

        htmlItem =
        `
        <div class="slide">
            <img src="${image}" class="card-img-top rounded mt-3" alt="#">
            <h4 class="img-title">${title}</h4>
            <p class="img-text">${text}</p>
        </div>
        `
    }
    
    carouselSection.innerHTML += htmlItem
}

const lastIndex = slideElements.length - 1

const rightBtnElement = document.getElementById('btnright')

rightBtnElement.onclick = corouselPlayRight

function corouselPlayRight (){

    rightAutoPlay ()
    
    setInterval(rightAutoPlay, 3000)
}

function rightAutoPlay (){

	let slideCorrente = slideElements[indexActiveSlide]

	slideCorrente.classList.remove('active')

    if(indexActiveSlide < lastIndex){

        indexActiveSlide += 1

    }else{
        indexActiveSlide = 0
    }

	let prossimaSlide = slideElements[indexActiveSlide]

	prossimaSlide.classList.add('active')
}

const leftBtnElement = document.getElementById('btnleft')

leftBtnElement.onclick = corouselPlayLeft

function corouselPlayLeft (){

    leftAutoPlay ()
    
    setInterval(leftAutoPlay, 3000)
}

function leftAutoPlay () {

    console.log("Bottone sinistro")

	let slideCorrente = slideElements[indexActiveSlide]

	slideCorrente.classList.remove('active')

    if(indexActiveSlide > 0){
        
        indexActiveSlide--
        
    }else{
        indexActiveSlide = slideElements.length - 1
    }

	let precedenteSlide = slideElements[indexActiveSlide]

	precedenteSlide.classList.add('active')

	console.log('next slide', indexActiveSlide)

}

const pauseBtnElement = document.getElementById('pauseButton')

pauseBtnElement.addEventListener("click", stopCarousel)

function stopCarousel (){
    
    clearInterval(rightAutoPlay)
}