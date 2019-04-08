// reset 

window.addEventListener('DOMContentLoaded', function () {

	//form
	//	form button
	var formSubmit = document.querySelectorAll('#formBtn');
	formSubmit.forEach(function (btn) {
		btn.addEventListener('click', function (event) {
			event.preventDefault();
			return false;
		});
	})
	//reset form
	document.querySelectorAll('.radio').forEach(function (radio) {
		(Number(radio.value) === 0) ? radio.checked = 'true': false;

	});
	// end form
	// mobile-menu

	var menuIcon = document.querySelector('.menu-icon'),
		menu = document.querySelector('.header__menu');

	menuIcon.addEventListener('click', function () {
		this.classList.toggle('menu-icon--open');
		menu.classList.toggle('header__menu_active');
	})

	// end mobile menu
	// popup form

	var popupBtn = document.querySelectorAll('.popup__btn'),
		popupWindow = document.querySelector('.hidden-form');
	popupBtn.forEach(function (btn) {
		btn.addEventListener('click', function () {
			popupWindow.classList.toggle('hidden-form_open');
		})
	});

	// end popup form
	//	adaptive text in box

	var fontResize = document.querySelectorAll('.resizeble-font'); //block with font

	textAdaptive();

	window.addEventListener('resize', textAdaptive);

	// resize font function

	function textAdaptive() {
		var windowWidth = this.innerWidth,
			windowHeight = this.innerHeight,
			index = 1;
		if (windowHeight > windowWidth) {
			index = windowHeight / windowWidth;
		};
		fontResize.forEach(function (elem) {
			var pdngWeight = parseInt(getComputedStyle(elem.parentElement, null).getPropertyValue('padding-left')) * 2;
			var pdngHeight = parseInt(getComputedStyle(elem.parentElement, null).getPropertyValue('padding-top')) + parseInt(getComputedStyle(elem.parentElement, null).getPropertyValue('padding-bottom')),
				maxSize = parseFloat(elem.getAttribute('data-size'));

			var widthText = elem.parentElement.offsetWidth - pdngWeight;

			console.log('padding--> ' + pdngWeight);
			console.log('widthText-2  ' + elem.parentElement.offsetWidth + ' ---- ' +
				widthText + '------' + $('.cloud__text').width());

			var texttext = elem.innerHTML.replace(/(<\/?[^>]+>)/g, '').trim();
			var length = elem.innerHTML.replace(/(<\/?[^>]+>)/g, '').trim().length;
			console.log('length-2  ' + length + '  text-->' +
				texttext);
			size = widthText / length * parseFloat(elem.getAttribute('data-ratio')) * index;
			console.log('size-->', size);
			if (size > maxSize) {
				size = maxSize;
			}
			elem.style.fontSize = size + 'px';
			while ((elem.clientHeight > (elem.parentElement.clientHeight - pdngHeight)) && size > 12) {
				size = size - 0.1;
				elem.style.fontSize = size + 'px';
			}
		});
	};
	//	end adaptive text in box
});
// polyfill for forEach
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}
