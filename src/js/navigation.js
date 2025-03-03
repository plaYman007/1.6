import { addOverlay, removeOverlay } from './page'
import { debounce } from './utils'

const navigation = document.querySelector('.navigation')
const burgerAll = document.querySelectorAll('.burger')

let isOpen = false

export function openNavigation() {
  isOpen = true
  navigation.classList.add('navigation_open')
  updateBtn(closeNavigation)
  updateImg('./img/burger.svg')
  addOverlay()
}

export function closeNavigation() {
  isOpen = false
  navigation.classList.remove('navigation_open')
  updateImg('./img/burger-open.svg')
  updateBtn(openNavigation)
  removeOverlay()
}

function updateBtn() {
  burgerAll.forEach((btn) => {
    if (isOpen) {
      btn.removeEventListener('click', openNavigation)
      btn.addEventListener('click', closeNavigation)
    } else {
      btn.removeEventListener('click', closeNavigation)
      btn.addEventListener('click', openNavigation)
    }
  })
}

function updateImg(url) {
  const images = document.querySelectorAll('.burger img')
  images.forEach((img) => {
    img.src = url
  })
}

function updateFloating() {
  const width = window.innerWidth

  if (width < 1120) {
    navigation.classList.add('navigation_floating')
  } else {
    navigation.classList.remove('navigation_floating')
    closeNavigation()
  }
}

export function initNavigation() {
  burgerAll.forEach((item) => {
    item.addEventListener('click', openNavigation)
  })

  updateFloating()

  window.addEventListener('resize', debounce(updateFloating))
}
