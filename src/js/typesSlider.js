import { checkMobile } from './utils.js'

function initSliderTypes() {
  const isMobile = checkMobile()

  const content = document.querySelector('.types__content')
  const wrapper = document.querySelector('.types-wrapper')
  const items = document.querySelectorAll('.types__item-wrap')

  let slider

  if (isMobile && !slider) {
    content.classList.remove('types__desktop')
    wrapper.classList.remove('types__list')
    content.classList.add('sliderTypes')
    wrapper.classList.add('swiper-wrapper')

    items.forEach((item) => {
      item.classList.add('swiper-slide')
    })

    slider = new Swiper('.sliderTypes', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 16,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  } else {
    if (slider) {
      slider.destroy()
    }

    content.classList.remove('sliderTypes')
    wrapper.classList.remove('swiper-wrapper')
    wrapper.removeAttribute('style')

    content.classList.add('types__desktop')
    wrapper.classList.add('types__list')

    items.forEach((item) => {
      item.classList.remove('swiper-slide')
      item.removeAttribute('style')
    })
  }
}

export { initSliderTypes }
