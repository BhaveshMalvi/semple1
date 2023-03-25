let navbar = document.querySelector('.navbar');
document.querySelector('#manu_bar').onclick=function () {
    navbar.classList.toggle('active');
}

let search = document.querySelector('.search');
document.querySelector('#search').onclick=function () {
    search.classList.toggle('active');
}

// swipe img start

const slides = document.querySelectorAll(".slide")
var counter = 0;

// console.log(slides)

// foreach loop start here 

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    if(counter!=0){
        counter--
        slideImg()
    }
}

const goNext = () => {
    if(counter < slides.length-1){
        counter++
        slideImg()
    }
}

const slideImg = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${(counter%4) * 100}%)`
        }
    )
}

// swipe img end 




const slides1 = document.querySelectorAll(".slide1")
console.log(slides1)
var counter1 = 0;

slides1.forEach(
    (slide1,index) => {
        slide1.style.left = `${index * 100}%`
    }
)

const goPrev1 = () => {
    if(counter1!=0){
        counter1--
        slideImg1()
        
    }
}

const goNext1 = () => {
    if(true){
        counter1++
        slideImg1()      
    }
}

const slideImg1 = () => {
    slides1.forEach(
        (slide1) => {
            slide1.style.transform = `translateX(-${(counter1%slides1.length) * 100}%)`
        }
    )
}