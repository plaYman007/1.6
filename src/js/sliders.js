import { checkMobile } from "./utils.js";

function initSliderBrands() {
    const isMobile = checkMobile()

    const content = document.querySelector('.brands__content')
    const wrapper = document.querySelector('.brands-wrapper')
    const items = document.querySelectorAll('.brands__item-wrap')

    let slider;


    if (isMobile && !slider) {
        content.classList.remove('brands__desktop')
        wrapper.classList.remove('brands__list')
        content.classList.add('slider')
        wrapper.classList.add('swiper-wrapper')

        items.forEach(item => {
            item.classList.add('swiper-slide')
        })

        slider = new Swiper('.slider', {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 16,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        });

    } else {
        if (slider) {
            slider.destroy()
        }

        content.classList.remove('slider')
        wrapper.classList.remove('swiper-wrapper')
        wrapper.removeAttribute('style');

        content.classList.add('brands__desktop')
        wrapper.classList.add('brands__list')

        items.forEach(item => {
            item.classList.remove('swiper-slide')
            item.removeAttribute('style');
        })

    }
}



export { initSliderBrands }