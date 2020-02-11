function toggleOverflowOnBody() {
	const body = document.querySelector('body');
  const differenceWindowPage = window.innerWidth - body.clientWidth;
  
  if (body.style.overflow == 'hidden')
    body.style.overflow = "";
  else
    body.style.overflow = 'hidden';

  if (parseInt(body.style.paddingRight) > 0) {
    body.style.paddingRight = '';
  } else if (differenceWindowPage > 0) {
    body.style.paddingRight = differenceWindowPage + "px";
  }
}

$(document).ready(function () {
	svg4everybody({});

	$('.loader').remove();

	const body = $('body');

	if ($('.blog-article-carousel').length) {
		$('.blog-article-carousel .owl-carousel').owlCarousel({
			loop:false,
			margin:0,
			items: 1,
			nav: false,
			dots: false
		});

		$('.blog-article-carousel .carousel-nav-right').click(function() {
			$('.blog-article-carousel .owl-carousel').trigger('next.owl.carousel');
		});
		$('.blog-article-carousel .carousel-nav-left').click(function() {
			$('.blog-article-carousel .owl-carousel').trigger('prev.owl.carousel', [300]);
		});
	}

	if ($('.main-carousel.owl-carousel').length) {
		$('.main-carousel.owl-carousel').owlCarousel({
			loop:true,
			margin:0,
			items: 1,
			nav: false,
			dots: false
		});

		$('.main-carousel-wrap .carousel-nav-right').click(function() {
			$('.main-carousel.owl-carousel').trigger('next.owl.carousel');
		});
		$('.main-carousel-wrap .carousel-nav-left').click(function() {
			$('.main-carousel.owl-carousel').trigger('prev.owl.carousel', [300]);
		});
	}

	if ($('.product-carousel').length) {
		$('.product-carousel .owl-carousel').owlCarousel({
			loop:true,
			margin:15,
			items: 4,
			nav: false,
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				460: {
					items: 2
				},
				768: {
					items: 3
				},
				1024: {
					items: 4
				}
			}
		});

		$('.product-carousel-section .carousel-nav-right').click(function() {
			$('.product-carousel .owl-carousel').trigger('next.owl.carousel');
		});
		$('.product-carousel-section .carousel-nav-left').click(function() {
			$('.product-carousel .owl-carousel').trigger('prev.owl.carousel', [300]);
		});
	}

	if ($('.one-product-carousel').length) {
		$('.one-product-carousel__view .owl-carousel').owlCarousel({
			loop:false,
			animateOut: 'fadeOut',
			margin:0,
			items: 1,
			nav: false,
			dots: false
		});

		$('.one-product-carousel__view .carousel-nav-right').click(function() {
			$('.one-product-carousel__view .owl-carousel').trigger('next.owl.carousel');
		});
		$('.one-product-carousel__view .carousel-nav-left').click(function() {
			$('.one-product-carousel__view .owl-carousel').trigger('prev.owl.carousel', [300]);
		});

		$('.one-product-carousel__marks .owl-carousel').owlCarousel({
			loop:false,
			margin:11,
			items: 4,
			nav: false,
			dots: false,
			responsive: {
				0: {
					margin: 6,
				},
				480: {
					margin: 8,
				},
				576: {
					margin: 10,
				},
				614: {
					margin: 11,
				},
				768: {
					margin: 6,
				},
				890: {
					margin: 8,
				},
				1024: {
					margin: 10,
				},
				1200: {
					margin: 11,
				}
			}
		});
	}

	function openMobMenu() {
		toggleOverflowOnBody();

		$(this).toggleClass('active');
		$('.header-bottom').toggleClass('active');
	}

	if ($('.mob-nav-btn').length)
		$('.mob-nav-btn').on('click', openMobMenu);

	if ($('.count').length) {  
    $('.count').each(function() {
    	var maxValue = parseFloat($(this).data('max'));
    	var step = parseFloat($(this).data('step'));

      var resultBlock = $(this).find('.count__result');
      var result = parseFloat($(this).find('.count__result').text());
      $(this).find('.count__plus').on('click', function() {
        if(result < maxValue) {
        	result += step;
          resultBlock.text(result + ' ' + resultBlock.data('name'));
        }
      })
      $(this).find('.count__minus').on('click', function() {
        if(result > 1 ) {
        	result -= step;
          resultBlock.text(result + ' ' + resultBlock.data('name'));
        }
      })
    });
  }

  if ($('.tabs').length) {
  	var tabs = $('.tab');
  	var tabsContent = $('.tab-content');

  	$('.tab').on('click', function(e) {
  		var idx = tabs.index($(this));

  		$(this).addClass('active');
  		$(this).siblings().removeClass('active');

  		$(tabsContent[idx]).siblings().fadeOut(200, function() {
  			$(tabsContent[idx]).fadeIn(200, function() {
  				$(tabsContent[idx]).addClass('active')
  			}).siblings().removeClass('active');
  		});
  		
  	});
  }

  function openModal(modalName) {
    toggleOverflowOnBody();
    $(modalName).addClass('open');
  }
  $('.modal-view').on('click', function(e) {
    e.preventDefault();
    
    var modalName = $(this).attr('href');

    if ($('.modal-wrap.open').length) {
      $('.modal-wrap.open').removeClass('open');
      setTimeout(function() {
        openModal(modalName);
      }, 300)
    }
    else
      openModal(modalName);
  });

  $(document).on('click', function(e) {
    if ($(e.target).hasClass('modal-inner')) {
      $(e.target).closest('.open').removeClass('open');
      setTimeout(function() {
	    	toggleOverflowOnBody();
	    }, 300);
    }
  });
  $('.modal__close, .modal__btn-close').on('click', function(e) {
    $(this).closest('.open').removeClass('open');
    setTimeout(function() {
    	toggleOverflowOnBody();
    }, 300);
  });

  if ($('.faq-head').length) {
  	$('.faq-head').click(function() {
  		$(this).closest('.faq-item').siblings().removeClass('active');
  		$(this).closest('.faq-item').siblings().find('.faq-desc').slideUp(300);
  		$(this).closest('.faq-item').toggleClass('active');
  		$(this).closest('.faq-item').find('.faq-desc').slideToggle(300)
  	});
  }

  if ($('.select').length) {
  	$('.select').each(function(item, element) {
  		$(element).selectmenu();
  	});
  }

  if ($('.filter-btn').length) {
  	$('.filter-btn').on('click', function() {
  		$(this).toggleClass('active');
  		$('.catalog-sidebar').toggleClass('active');
  	});
  }

  if ($("#filter-range").length) {
    $("#filter-range").slider({
      range: true,
      min: 0,
      max: 12000,
      values: [ 100, 8000 ],
      slide: function( event, ui ) {
        $("#filter-range-first").val(ui.values[ 0 ] + " грн");
        $("#filter-range-second").val(ui.values[ 1 ] + " грн");
      }
    });
    $("#filter-range-first").val( $("#filter-range").slider("values", 0) + " грн");
    $("#filter-range-second").val( $("#filter-range").slider("values", 1) + " грн");

    $("#filter-range-first").on('input', function(e) {
      if (parseInt(e.target.value) < parseInt($("#filter-range-second").val())) {
        $("#filter-range").slider("values", 0, parseInt($(this).val()));
      }
    });
    $("#filter-range-second").on('input', function(e) {
      if (parseInt(e.target.value) > parseInt($("#filter-range-first").val())) {
        $("#filter-range").slider("values", 1, parseInt($(this).val()));
      }
    });
  }

});
