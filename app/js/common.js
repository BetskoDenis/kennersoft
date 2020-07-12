main ={
    slider: function () {
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
    },
    scroll: function () {

        const buttonToTop = document.querySelector('.buttonToTop');
        buttonToTop.addEventListener('click', e => {
            e.preventDefault();
            const buttonAttr = buttonToTop.getAttribute('href').substr(1);
            document.getElementById(buttonAttr).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
    },
    scrollHeader: function (){
        let header = document.getElementById('header');
        let buttonToTop = document.getElementById('buttonToTop')
        window.addEventListener('scroll', function () {
            let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            if(posTop){
                header.classList.add('scroll')
                buttonToTop.classList.add('scroll')
            } else{
                header.classList.remove('scroll')
                buttonToTop.classList.remove('scroll')
            }

        })


    },
    init: function () {
        this.slider();
        this.scroll();
        this.scrollHeader();

    },
}
document.addEventListener('DOMContentLoaded', () => {
    main.init();
})



