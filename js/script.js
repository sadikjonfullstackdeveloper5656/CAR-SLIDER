window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.offer__slide'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = getComputedStyle(slidesWrapper).width, //   650px
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total');

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }




    slidesField.style.width = 100 * slides.length + '%';

    slidesField.style.display = 'flex';
    slidesField.style.transition = '.5s ease';
    slidesWrapper.style.overflow = 'hidden';


    slides.forEach(slide => {
        slide.style.width = width;
    })

    next.addEventListener('click', () => { // NEXT OLDI
        if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) { // 550px
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2)
        }
        slidesField.style.transform = `translate(-${offset}px)`



        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`; // slide ga 0 qilgin deb yozyapmiz
        } else {
            current.textContent = slideIndex;
        }

    })

    prev.addEventListener('click', () => { // PREV ORQA 
        if (offset == 0) { //550px
            offset = (+width.slice(0, width.length - 2) * (slides.length - 1))
        } else {
            offset -= +width.slice(0, width.length - 2)
        }
        slidesField.style.transform = `translate(-${offset}px)`

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`; // slide ga 0 qilgin deb yozyapmiz
        } else {
            current.textContent = slideIndex;
        }


    })



})