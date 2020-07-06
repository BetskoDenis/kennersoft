
main ={
    slider: function () {
        let touchDevice = ('ontouchstart' in document.documentElement);
        let down = 'mousedown';
        let up = 'mouseup';
        let move = 'mousemove';
        let mobileMenu = document.getElementById('burgerButton');
        let headerMenu = document.getElementById('headerMenu');
        let leftPercent = 0;
        let carouselItem = document.getElementsByClassName('sliderItem');
        let carouselWrapper = document.getElementById('sliderWrapper');
        let carouselBlock = document.getElementById('sliderBlock');
        let itemWidth = carouselItem[0].clientWidth;
        let carouselWrapperWidth = carouselWrapper.clientWidth;
        let percentItem = 100 / Math.round(carouselWrapperWidth / itemWidth);
        let coordinatesDown = 0;
        let coordinatesUp = 0;
        let coordinatesResult = 0;
        let coordinatesMove = 0;
        let mouseDown = false;
        let mouseMove = false;
        let moveLeft = 0;


        if (touchDevice) {
            down = 'touchstart';
            up = 'touchend';
            move = 'touchmove';
        }

        function openButtonMobileMenu() {
            mobileMenu.classList.toggle('open')
        }

        function openMobileMenu(){
            headerMenu.classList.toggle('mobile')
        }

        mobileMenu.addEventListener('click', function () {
            openButtonMobileMenu();
            openMobileMenu()
        })


        let leftButton = document.getElementById('leftButton');
        let rightButton = document.getElementById('rightButton');

        function actionLeftButton() {
            return () => {
                if (leftPercent > 0) {
                    leftPercent = leftPercent * -1
                }
                leftPercent = leftPercent - percentItem;
                carouselBlock.style.left = leftPercent + "%";
            }
        }

        let leftMove = actionLeftButton();

        function actionRightButton() {
            return () => {
                leftPercent = leftPercent + percentItem;
                carouselBlock.style.left = leftPercent + "%";
            }
        }

        let rightMove = actionRightButton();

        rightButton.onclick =  () => {
            let leftPercentPositive = leftPercent;
            if (leftPercent < 0) {
                leftPercentPositive = leftPercent * -1;
            }
            let percentAllItem = percentItem * carouselItem.length;
            if (leftPercentPositive >= (percentAllItem - 100)) {
                leftPercent = 0;
                carouselBlock.style.left = leftPercent + "%";
            } else {
                leftMove();
            }
        };

        leftButton.onclick = () => {
            if (leftPercent > 0) {
                leftPercent = leftPercent * -1;
            }
            let percentAllItem = percentItem * carouselItem.length;
            if (Math.round(leftPercent) == 0) {
                leftPercent = (percentAllItem - 100) * -1;
                carouselBlock.style.left = leftPercent + "%";
            } else {
                rightMove();
            }
        }

        carouselWrapper.addEventListener(down, event => {

            if (touchDevice) {
                coordinatesDown = event.touches[0].clientX;
            } else {
                coordinatesDown = event.x;
            }
            mouseDown = true;
            mouseMove = false;
            moveLeft = leftPercent;
            return coordinatesDown;
        });



        carouselWrapper.addEventListener(move, event => {
            if (mouseDown) {

                if (touchDevice) {
                    coordinatesMove = event.touches[0].clientX;
                } else {
                    coordinatesMove = event.x;
                }
                mouseMove = true;
                let resultMove = coordinatesDown - coordinatesMove;




                if(resultMove > 0 && resultMove < 200){
                    carouselBlock.style.left = (leftPercent + moveLeft) * -1 + '%';
                    moveLeft = percentItem;
                } else if(resultMove < 0 && resultMove > -200){
                    moveLeft = percentItem * -1;
                }


                if (leftPercent < 0) {
                    leftPercent = leftPercent * -1;
                }
                carouselBlock.style.left = (leftPercent + moveLeft) * - 1 + '%';
            }
        })
        window.addEventListener(up, event => {
            if (mouseDown) {
                let percentAllItem = percentItem * carouselItem.length;
                if (touchDevice) {
                } else {
                    coordinatesUp = event.x;
                }
                coordinatesResult = coordinatesDown - coordinatesUp
                mouseDown = false;

                if (mouseMove) {
                    leftPercent = (leftPercent + moveLeft) * -1;
                }

                if (Math.round(percentAllItem - 100) < (Math.round(leftPercent)) * -1) {
                    leftPercent = (percentAllItem - 100) * -1;
                    carouselBlock.style.left = leftPercent + '%';
                } else if ((Math.round(leftPercent)) * -1 < 0) {
                    leftPercent = 0;
                    carouselBlock.style.left = leftPercent + '%';
                } else
                    carouselBlock.style.left = leftPercent + '%';
            }



        });
    },

    scroll: function () {
        let dropdownMenu = document.getElementById('headerMenu');
        let mouseWrapper = document.querySelectorAll('.mouseWrapper');
        let buttonToTop = document.querySelectorAll('.buttonToTop');
        let anchors = Array.from(dropdownMenu.querySelectorAll('a[href*="#"]'));
        anchors.push(mouseWrapper[0])
        anchors.push(buttonToTop[0])
        for (let anchor of anchors) {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                let blockID = anchor.getAttribute('href').substr(1);
                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }

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
    map: function () {
      let buttonMap = document.getElementById('buttonMap');
      let map = document.getElementById('map');
        buttonMap.addEventListener('click', function () {
            map.classList.toggle('hidden')
        })
    },

    init: function () {
        this.slider();
        this.scroll();
        this.scrollHeader();
        this.map();
    },
}

document.addEventListener('DOMContentLoaded', () => {
    main.init();
})




