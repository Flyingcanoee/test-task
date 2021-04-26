window.toggleMenu = function toggleMenu() {
    let menu = document.querySelector('.menu');
    if (menu.classList.contains('active')){
        menu.classList.remove('active');
        document.body.style = 'overflow-y : auto';
    } else {
        menu.classList.add('active');
        document.body.style = 'overflow-y : hidden';
    }
}

let lastScrollY = 0;
let currentPage = 0;
const pages = ['.title-section', '.about-section', '.portfolio'];
let allowScrolling = true;
window.addEventListener('keydown', (e) => {
	if (!allowScrolling) {
		return;
	}
	if (e.key === 'ArrowUp') {
		currentPage--;
	} else if (e.key === 'ArrowDown') {
		currentPage++;
	} else {
		return;
	}

	if (currentPage < 0) {
		currentPage = 0;
	} 
	if (currentPage > pages.length - 1) {
		currentPage = pages.length - 1;
	}

	allowScrolling = false;
	const page = document.querySelector(pages[currentPage]);
	smoothScrollingTo(page);
	setTimeout(() => {allowScrolling = true;}, 1000);
});

window.addEventListener('wheel', (e) => {
	if (!allowScrolling) {
		return;
	}
	if (e.deltaY < 0) {
		currentPage--;
	} else if (e.deltaY > 0) {
		currentPage++;
	} else {
		return;
	}

	if (currentPage < 0) {
		currentPage = 0;
	} 
	if (currentPage > pages.length - 1) {
		currentPage = pages.length - 1;
	}

	allowScrolling = false;
	const page = document.querySelector(pages[currentPage]);
	smoothScrollingTo(page);
	setTimeout(() => {allowScrolling = true;}, 1000);
});

var jquery = require("jquery");
window.$ = window.jQuery = jquery;

function smoothScrollingTo(target){ 
	$('html,body').animate({scrollTop: $(target).offset().top}, 1000);
}