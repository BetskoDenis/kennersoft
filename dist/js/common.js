const burgerButton = document.querySelector('.mobile-button');
const headerMenu = document.querySelector('.header-bottom-wrapper')
burgerButton.addEventListener('click', (e) => {
    e.preventDefault();
    burgerButton.classList.toggle('open');
    headerMenu.classList.toggle('mobile')
})
const sliderItem = document.querySelector('.slider-item');
const sliderWrapper = document.querySelector('.slider-wrapper');

function getWidth() {
    const itemWidth = sliderItem.clientWidth;
    const itemQuantity = sliderWrapper.childElementCount;
    return {
        itemWidth: itemWidth,
        generalWidth: itemWidth*itemQuantity
    }
}

function leftPosition(left){
    let numberActiveItem;
    sliderWrapper.style = `left: ${left}px`

    numberActiveItem = (-parseInt(sliderWrapper.style.left)/ getWidth().itemWidth) + 1
    activeDot(numberActiveItem)
}

const leftButton = document.querySelector('.slider-left-button');
const rightButton = document.querySelector('.slider-right-button');
let leftPx = 0;

rightButton.addEventListener('click', () =>{
    if(leftPx <= -getWidth().generalWidth + getWidth().itemWidth){
        leftPx = 0;
        leftPosition(leftPx);
    } else{
        leftPx += -getWidth().itemWidth;
        leftPosition(leftPx);
    }
})

leftButton.addEventListener('click', () => {
    if(leftPx != 0){
        leftPx += getWidth().itemWidth;
        leftPosition(leftPx);
    }
})

const sliderDots = document.querySelector('.slider-dots')

function createDots() {
    for (let i=0; i<sliderWrapper.childElementCount; i++){
        let createDiv = document.createElement('div')
        createDiv.className = 'slider-dot'
        sliderDots.append(createDiv)
    }
    sliderDots.children[0].classList.add('active')
}
createDots()

function activeDot(active) {
    for(let i = 0; i<sliderDots.childElementCount; i++){
        sliderDots.children[i].classList.remove('active')
    }
    sliderDots.children[active-1].classList.add('active')
}

