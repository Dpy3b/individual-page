/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */




/* // Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
};
 */


 ////////

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

$(".search-more").on("click", function (event) {
	$(".projects-search").toggleClass('show');
	$(this).toggleClass('active');
});



$(window).on('load resize', function () {
	if ($(window).width() < 1338) {
		$('.logo-link').append($('.city'));
	}
	if ($(window).width() < 1200) {
		$('.section-management-time .big').append($('.section-management-time .year'));
		$('.supervision-item1').append($('.supervision-item2'));
		$('.management-control-wrapper2').append($('.section-management-supervision .photo-item2'));
		$('.section-search .search-wrapper').append($('.section-search .form-btn'));
		// $('.projects-search__wrapper-col:nth-child(1)').append($('.projects-search__wrapper-col:nth-child(5)'));
		$('.projects-search__item:nth-child(1) .projects-search__wrapper-col:nth-child(1)').append($('.projects-search__wrapper-col .checkbox1'));
		$('.projects-search__item:nth-child(1) .projects-search__wrapper-col:nth-child(2)').append($('.projects-search__wrapper-col .checkbox2'));
		$('.projects-search__item:nth-child(1) .projects-search__wrapper-col:nth-child(3)').append($('.projects-search__wrapper-col .checkbox3'));

	}

	if ($(window).width() < 960) {
		$('.leadership-name').append($('.leadership-socials'));
		$('.photo-item2-mobile').append($('.photo-item2'));
		$('.photo-item3-mobile').append($('.photo-item3'));
		$('.conf-img1').append($('.conf1img'));
		$('.internship-item').append($('.internship-item-mob'));
		$('.pictures').append($('.picture'));
		$('.conference-list__item--first').append($('.section-conference .li-mobile'));
		$('.section-guarantee-certificate .text-wrapper__item1').append($('.guarantee-certificate-list__item1'));
		$('.section-guarantee-certificate .text-wrapper__item2').append($('.guarantee-certificate__title'));
		$('.section-guarantee-cases .text-wrapper__item--mobile').append($('.guarantee-cases-list'));
		$('.section-guarantee-cases .text-wrapper__item--mobile .guarantee-cases-list li:nth-child(3)').append($('.guarantee-cases-text'));
		$('.section-management-control .text-wrapper1 .text-wrapper__item2').append($('.section-management-control .text-wrapper2 .text-wrapper__item p:nth-child(1)'));
		$('.section-management-quality .text-mobile').append($('.section-management-quality .text-mob'));
		$('.section-management-operating .text-wrapper2 .text-wrapper__item:nth-child(2)').append($('.section-management-operating .photo-item1'));
		$('.section-management-operating .text-wrapper2 .text-wrapper__item:nth-child(1)').append($('.section-management-operating .text-wrapper2 .text-wrapper__item:nth-child(2) p'));
		$('.section-management-surrender .management-surrender-wrapper__item:nth-child(2)').append($('.section-management-surrender .management-border'));
		$('.section-management-surrender .management-surrender-wrapper__item:nth-child(1)').append($('.section-management-surrender .management-text'));
		$('.section-legal2 .text-wrapper').append($('.section-legal .legal-text'));
		$('.screen-play-testing .play-testing__bottom').append($('.screen-play-testing .legal-circle'));
		$('.section-articles .articles-search__wrapper-col:nth-child(1)').append($('.section-articles .articles-search__wrapper-col:nth-child(2) .checkbox:nth-child(1)'));
		$('.section-articles .articles-search__wrapper-col:nth-child(3)').append($('.section-articles .articles-search__wrapper-col:nth-child(2) .checkbox:nth-child(1)'));
		$('.projects-search__wrapper-col1').append($('.projects-search__wrapper-col2'));
		$('.projects-search__wrapper-col3').append($('.projects-search__wrapper-col4'));
		$('.projects-search__wrapper-col6').append($('.projects-search__wrapper-col7'));
		$('.projects-search__wrapper-col8').append($('.projects-search__wrapper-col9'));
	}
	if ($(window).width() < 640) {
		$('.footer-box3').append($('.politics'));
		$('.footer-box2').append($('.title-footer'));
		$('.footer-box3').append($('.footer .info'));
		$('.footer-box1').append($('.footer-box3'));
		$('.footer-box2').append($('.footer-box4'));
		$('.header-mobile .inner').append($('.header .box'));
		$('.section-management-acceptance .acceptance-mob-list').append($('.section-management-acceptance .acceptance-mobile1'));
		$('.section-management-acceptance .section-inner').append($('.section-management-acceptance .acceptance-mobile2'));
		$('.section-management-acceptance .section-inner').append($('.section-management-acceptance .acceptance-mobile3'));
		$('.section-management-surrender .mob1').append($('.section-management-surrender .management-mobile1'));
		$('.section-management-surrender .text-wrapper').append($('.section-management-surrender .management-text'));
		$('.section-management-years .text-wrapper__item:nth-child(1) .year').append($('.section-management-years .comment'));
		// $('.section-testing-methodology2 .text-wrapper__item:nth-child(2) p:nth-child(3)').append($('.section-testing-methodology2 .text-break'));

		// $('.section-statics ul li').append( $('.section-statics ul .li-top img') );
	}
	if ($(window).width() < 480) {
		$('.section-management-years .text-wrapper__item:nth-child(1)').append($('.section-management-years .comment'));
		$('.screen-play-testing .screen-play__inner').append($('.screen-play-testing .legal-circle'));
		$('.section-testing-consumption .text-wrapper__item:nth-child(1) p:nth-child(1)').append($('.section-testing-consumption .sciencetechnics-year-mob1'));
		$('.section-testing-consumption .text-wrapper__item:nth-child(1) p:nth-child(1)').append($('.section-testing-consumption .sciencetechnics-year-mob2'));
		$('.section-testing-consumption .text-wrapper__item:nth-child(1) p:nth-child(4)').append($('.section-testing-consumption .sciencetechnics-year-mob3'));
		$('.section-articles .articles-search__wrapper-col:nth-child(3)').append($('.section-articles .articles-search__wrapper-col:nth-child(1) .checkbox.star'));
	}

});
//////////////////////
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
/*
$(document).ready(function() {

    $('li').hover(function(){

   $('#homepage_container').css('background-image' : 'whatever.png');

      };

});
 */



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
