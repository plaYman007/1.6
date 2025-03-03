import { checkMobile } from "./utils.js";

function initSpoler() {
    const elementSpolers = document.querySelectorAll('.spoler');

    elementSpolers.forEach(spoler => {
        const btn = spoler.querySelector('.spoler__btn');
        const content = spoler.querySelector('.spoler__content');
        let isHidden = true;

        function spolerHandler() {
            if (isHidden) {
                isHidden = false
                content.classList.add('hide')
                btn.classList.add('hide')
                btn.innerText = 'Показать все'
            } else {
                isHidden = true
                btn.innerText = 'Скрыть'
                content.classList.remove('hide')
                btn.classList.remove('hide')
            }

            if (checkMobile()) {
                content.classList.remove('hide')
                btn.classList.remove('hide')

            }
        }


        spolerHandler();

        btn.addEventListener('click', spolerHandler);
    })
}

export { initSpoler };