
const page = document.querySelector('.page');


export function initPage() {

}


export function addOverlay() {

  page.classList.add('page_overlay');
}

export function removeOverlay() {
  
  page.classList.remove('page_overlay');
}