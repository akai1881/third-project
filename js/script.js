$(document).ready(function () {
	$(".slider__inner").slick({
		infinite: false,
		speed: 300,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.svg" alt="left arrow"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg" alt="left arrow"></button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				dots: true,
				arrows: false,
			},
		}, ],
	});
});

$(document).ready(function () {
	$("ul.catalog__tabs").on(
		"click",
		"li:not(.catalog__tab_active)",
		function () {
			$(this)
				.addClass("catalog__tab_active")
				.siblings()
				.removeClass("catalog__tab_active")
				.closest("div.container")
				.find("div.catalog__content")
				.removeClass("catalog__content_active")
				.eq($(this).index())
				.addClass("catalog__content_active");
		}
	);

	$(document).on("click", "div.carousel__nav .dot", function () {
		$(this).addClass("dot_active").siblings().removeClass("dot_active");
	});

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on("click", function (e) {
				e.preventDefault();
				$(".catalog-item__content")
					.eq(i)
					.toggleClass("catalog-item__content_active");
				$(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
			});
		});
	}

	toggleSlide(".catalog-item__link");
	toggleSlide(".catalog-item__link_back");

	$("[data-modal=consultation").on("click", function () {
		$(".overlay, #consulting").fadeIn("slow");
	});
	$(".modal__close").on("click", function () {
		$(".overlay, #consulting, #thanks, #order").fadeOut("slow");
	});
	$(".button_buy").each(function (i) {
		$(this).on("click", function () {
			$("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
			$(".overlay, #order").fadeIn("slow");
		});
	});

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true,
				},
			},
			messages: {
				name: "обязательно",
				phone: "обязательно",
				email: {
					required: "Введите адрес вашей почты",
					email: "Неправильно введен адрес почты",
				},
			},
		});
	}
	validateForms("#consulting form");
	validateForms("#order form");
	validateForms("#consultation-form");
});