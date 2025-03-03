import { closeNavigation } from './navigation'
import { addOverlay, removeOverlay } from './page'

const modalsBtnOpen = document.querySelectorAll('.modal-btn-open')

function initModals() {
  modalsBtnOpen.forEach((btn) => {
    const to = btn.dataset.to
    const modal = document.querySelector(`.${to}`)
    if (modal) {
      const btnClose = modal.querySelector('.modal-btn-close')
      btn.addEventListener('click', () => {
        openModal(modal)
      })
      btnClose.addEventListener('click', () => {
        closeModal(modal)
      })
    }
  })
}

function openModal(elem) {
  closeNavigation()
  addOverlay()
  elem.classList.add('js-open')
}

function closeModal(elem) {
  removeOverlay()
  elem.classList.remove('js-open')
}

export { initModals, openModal, closeModal }
