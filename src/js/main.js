/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

//↑↑↑↑↑↑↑↑↑↑ плавный скроллинг по секциям
//====================================================================================================
//////// легаси от старого верстальщика
 jQuery(($) => {
	$('.select').on('click', '.select__head', function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).next().fadeOut();
		} else {
			$('.select__head').removeClass('open');
			$('.select__list').fadeOut();
			$(this).addClass('open');
			$(this).next().fadeIn();
		}
	});

	$('.select').on('click', '.select__item', function () {
		$('.select__head').removeClass('open');
		$(this).parent().fadeOut();
		$(this).parent().prev().text($(this).text());
		$(this).parent().prev().prev().val($(this).text());
	});

	$(document).click(function (e) {
		if (!$(e.target).closest('.select').length) {
			$('.select__head').removeClass('open');
			$('.select__list').fadeOut();
		}
	});
});

$(".filter-search__advanced-search-btn").on("click", function (event) {
	$(".filter-detail__content").toggleClass('_show');
	$(this).toggleClass('_active');
});

////////////////////// легаси от старого верстальщика для формы end
const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function (event) {
	event.preventDefault();

	let $this = $(this);
	let modalId = $this.data('modal');

	$(modalId).addClass('show');
	$("body").addClass('no-scroll');

	setTimeout(function () {
		$(modalId).find(".modals-content").css({
			transform: "scale(1)"
		});
	}, 200);


});


modalClose.on("click", function (event) {
	event.preventDefault();

	let $this = $(this);
	let modalParent = $this.parents('.modals');

	modalParent.find(".modals-content").css({
		transform: "scale(0)"
	});

	setTimeout(function () {
		modalParent.removeClass('show');
		$("body").removeClass('no-scroll');
	}, 200);
});


$(".modals").on("click", function (event) {
	let $this = $(this);

	$this.find(".modals-content").css({
		transform: "scale(0)"
	});

	setTimeout(function () {
		$this.removeClass('show');
		$("body").removeClass('no-scroll');
	}, 200);
});

$(".modals-content").on("click", function (event) {
	event.stopPropagation();
});
//====================================================================================================




//скролл у второй ссылки в связи с динамическим адаптивом
const links = document.querySelectorAll('.order-project__more-details-btn--scroll-2');
const BREAKPOINT = 640;

if (window.innerWidth < BREAKPOINT) {
  links.forEach((link) => {
    link.href = '#examples-foundation-640';
  });
}
//причуда с фоном при наведении на пдф-ссылки
//причуда работает только на устройствах с шириной экрана >= 991.98px
if (document.documentElement.clientWidth >= 991.98){
(function() {
    const section = document.querySelector('.examples-foundation');
    const content = section.querySelector('.examples-foundation__content');
    const title = section.querySelector('.examples-foundation__title');
    const links = section.querySelectorAll('.examples-foundation__type');

    const sectionClassNamesSet = new Set();

    const TIMEOUT = 300;
    let isTimeout = false;

    const addTimeout = () => {
      isTimeout = true;
      setTimeout(() => isTimeout = false, TIMEOUT);
    };

    const removeSectionBackground = (sectionClassName) => section.classList.remove(sectionClassName);

    const changeTitleAndLinkColor = (currentLink, action) => {
      title.classList[action]('examples-foundation__title--active');

      links.forEach((link) => {
        if (currentLink && link !== currentLink) {
          link.classList[action]('examples-foundation__type--no-hover');
        } else {
          link.classList[action]('examples-foundation__type--no-hover');
        }
      });
    };

    const onContentMouseover = (evt) => {
      const currentLink = evt.target;

      if (currentLink.classList.contains('examples-foundation__type')) {
        changeTitleAndLinkColor(evt.target, 'add');
      }

      if (currentLink.classList.contains('examples-foundation__type') && !isTimeout) {
        addTimeout();

        const currentClassName = currentLink.dataset.img;

        sectionClassNamesSet.forEach(removeSectionBackground);

        sectionClassNamesSet.add(currentClassName);
        section.classList.add(currentClassName);
      }
    };

    const onSectionMouseleave = () => {
      sectionClassNamesSet.forEach(removeSectionBackground);
      changeTitleAndLinkColor(null, 'remove');
    };

    content.addEventListener('mouseover', onContentMouseover);
    section.addEventListener('mouseleave', onSectionMouseleave);
})();
}; //конец 992


if (document.documentElement.clientWidth >= 991.98){
(function() {
const section = document.querySelector('.examples-of-civil');
const content = section.querySelector('.examples-of-civil__content');
const title = section.querySelector('.examples-of-civil__title');
const links = section.querySelectorAll('.examples-of-civil__type');

const sectionClassNamesSet = new Set();

const TIMEOUT = 300;
let isTimeout = false;

const addTimeout = () => {
    isTimeout = true;
    setTimeout(() => isTimeout = false, TIMEOUT);
};

const removeSectionBackground = (sectionClassName) => section.classList.remove(sectionClassName);

const changeTitleAndLinkColor = (currentLink, action) => {
    title.classList[action]('examples-of-civil__title--active');

    links.forEach((link) => {
    if (currentLink && link !== currentLink) {
        link.classList[action]('examples-of-civil__type--no-hover');
    } else {
        link.classList[action]('examples-of-civil__type--no-hover');
    }
    });
};

const onContentMouseover = (evt) => {
    const currentLink = evt.target;

    if (currentLink.classList.contains('examples-of-civil__type')) {
    changeTitleAndLinkColor(evt.target, 'add');
    }

    if (currentLink.classList.contains('examples-of-civil__type') && !isTimeout) {
    addTimeout();

    const currentClassName = currentLink.dataset.img;

    sectionClassNamesSet.forEach(removeSectionBackground);

    sectionClassNamesSet.add(currentClassName);
    section.classList.add(currentClassName);
    }
};

const onSectionMouseleave = () => {
    sectionClassNamesSet.forEach(removeSectionBackground);
    changeTitleAndLinkColor(null, 'remove');
};

content.addEventListener('mouseover', onContentMouseover);
section.addEventListener('mouseleave', onSectionMouseleave);
})();
}; //конец 992

//динамический адаптив, супер-секретная разработка, панацея от "креативных" дизайнеров
function DynamicAdapt(type) {
this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};
//инициализация на сайте
const da = new DynamicAdapt("max");
da.init();
