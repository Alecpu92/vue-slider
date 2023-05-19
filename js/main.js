const slides = [
    {
        items : 'img/01.webp',
        title : 'Marvel Spider Man Miles Morales',
        text : 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        items : 'img/02.webp',
        title : 'Ratchet & Clank: Rift Apart',
        text : 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        items : 'img/03.webp',
        title : 'Fortnite',
        text : 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
        items : 'img/04.webp',
        title : 'Stray',
        text :'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        items : 'img/05.webp',
        title : 'Marvel Avengers',
        text : 'Marvel Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const slideWrapper = document.querySelector('.slide-wrapper');
slideWrapper.innerHTML = '';
const mainItem = document.querySelector('.main-item');
const photoTitle = document.querySelector('.title');
const photoDescription = document.querySelector('.subtitle');
const mainItemImg = document.querySelector('.main-item > img');



let currentIndex = 0;

slides.forEach( ( {items,title,text} ) => {

    const divElement = document.createElement('div');
    divElement.classList.add('item');
    const image = document.createElement('img');

    image.src = items;

    
    slideWrapper.append(divElement);
    divElement.append(image);

    slideWrapper.innerHTML + divElement;
})

const images = [...document.getElementsByClassName('item')];

images[currentIndex].classList.add('active');
mainItemImg.src = slides[currentIndex].items;
photoTitle.innerHTML = slides[currentIndex].title;
photoDescription.innerHTML = slides[currentIndex].text;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


prev.addEventListener('click', function(){
    if( currentIndex > 0 ){
        images[currentIndex].classList.remove('active');
        currentIndex--;
        images[currentIndex].classList.add('active');
    }else{
        images[currentIndex].classList.remove('active');
        currentIndex = slides.length - 1;
        images[currentIndex].classList.add('active');
    }
    mainItemImg.src = slides[currentIndex].items;
    photoTitle.innerHTML = slides[currentIndex].title;
    photoDescription.innerHTML = slides[currentIndex].text;
})

next.addEventListener('click', function(){
    if( currentIndex < slides.length - 1 ){
        images[currentIndex].classList.remove('active');
        currentIndex++;
        images[currentIndex].classList.add('active');
    }else{
        images[currentIndex].classList.remove('active');
        currentIndex = 0;
        images[currentIndex].classList.add('active');
    }
    mainItemImg.src = slides[currentIndex].items;
    photoTitle.innerHTML = slides[currentIndex].title;
    photoDescription.innerHTML = slides[currentIndex].text;
})