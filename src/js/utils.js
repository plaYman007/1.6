function checkMobile() {
    const width = window.innerWidth;
    if(width < 768 ) {
        return true;
    }else {
        return false;
    }
}
function debounce(callback, delay = 100) {
	let timer;

	return function (...params) {
		clearTimeout(timer);
		timer = setTimeout(callback, delay, ...params);
	};
}


export { checkMobile, debounce};