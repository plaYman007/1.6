import { checkMobile } from './utils.js'

function initSliderServices() {
  const isMobile = checkMobile()

  const content = document.querySelector('.services__content')
  const wrapper = document.querySelector('.services-wrapper')
  const items = document.querySelectorAll('.services__item-wrap')

  let slider

  if (isMobile && !slider) {
    content.classList.remove('services__desktop')
    wrapper.classList.remove('services__list')
    content.classList.add('sliderServices')
    wrapper.classList.add('swiper-wrapper')

    items.forEach((item) => {
      item.classList.add('swiper-slide')
    })

    slider = new Swiper('.sliderServices', {
      loop: true,
      slidesPerView: 1.9,
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

    content.classList.remove('sliderServices')
    wrapper.classList.remove('swiper-wrapper')
    wrapper.removeAttribute('style')

    content.classList.add('services__desktop')
    wrapper.classList.add('services__list')

    items.forEach((item) => {
      item.classList.remove('swiper-slide')
      item.removeAttribute('style')
    })
  }
}

export { initSliderServices }
