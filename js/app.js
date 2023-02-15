// MILESTONE 1 


const slideElements = document.getElementsByClassName('slide')

let indexActiveSlide = 0



// Riproduco il markup delle slides con js

// creo un array delle img 

const slideImages= [
    './img/img-1.jpeg',
    './img/img-2.jpeg',
    './img/img-3.jpeg',
    './img/img-4.jpeg',
    './img/img-5.jpg',
    './img/img-6.jpg'
]

console.log(slideImages)

// rivchiamo il container delle img dall html

const carouselSection = document.getElementById('carousel-section')

let htmlItem

for ( let i = 0; i < slideImages.length; i++  ){

    let srcImage = slideImages[i]

    console.log(slideImages[i])

    if (i === 0){

        htmlItem =
        `<div class="slide active">
            <img src="${srcImage}" alt="">
        </div>`

    }else {
        htmlItem =
        `<div class="slide">
            <img src="${srcImage}" alt="">
        </div>`
    }

    carouselSection.innerHTML += htmlItem
}



const rightBtnElement = document.getElementById('btnright')

const lastIndex = slideElements.length - 1
// Creare un carolsello con 6 img

rightBtnElement.addEventListener('click', function () {

    console.log("Bottone destro")

	let slideCorrente = slideElements[indexActiveSlide]

	slideCorrente.classList.remove('active')

    if(indexActiveSlide < lastIndex){

        indexActiveSlide += 1

    }else{
        indexActiveSlide = 0
    }

	let prossimaSlide = slideElements[indexActiveSlide]

	prossimaSlide.classList.add('active')

})


const leftBtnElement = document.getElementById('btnleft')


// Creo il carosello con bottone left per il riavvolgimento delle slides

leftBtnElement.addEventListener('click', function () {

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

})

// console.log(carouselSection.innerHTML)

