$(document).ready(function() {
  // mobile menu
  $('#mobileMenuBtn').on('click', function () {
    $('#mobileMenu').toggleClass('is-closed');
    $('#mobileMenu').toggleClass('is-open');
    $('#mobileMenuOverlay').toggleClass('is-visible');
    $('#pageContent').toggleClass('is-open-right');
  });

  $('#mobileMenuOverlay').on('click', function () {
    $('#mobileMenu').toggleClass('is-closed');
    $('#mobileMenu').toggleClass('is-open');
    $('#mobileMenuOverlay').toggleClass('is-visible');
    $('#pageContent').toggleClass('is-open-right');
  });

  $('.is-drilldown-submenu-parent').on('click', function (e) {
    e.stopPropagation();
    $(this).find('.submenu').first().toggleClass('is-active');
  });

  // tabs
  var tabIndex = 1;
  var tabHeadItems = $('.ecosystem-slide .tabs-heads').find('.tab');
  var tabContentItems = $('.ecosystem-slide .tabs-content').find('.tabs-cont');

  function tabActivate() {
    tabHeadItems.map(function () {
      $(this).removeClass('-active');
      var itemId =  $(this).find('.tab-button').data('tabid');
      if (itemId === tabIndex) {
        $(this).addClass('-active');
      }
    });

    tabContentItems.map(function () {
      $(this).removeClass('-active');
      var itemId =  $(this).data('tabcontid');
      if (itemId === tabIndex) {
        $(this).addClass('-active');
      }
    });
  };

  tabActivate();

  $('.ecosystem-slide .tabs-heads .tab-button').click(function() {
    tabIndex = $(this).data('tabid');
    tabActivate();
  });

  // scroll event
  $(document).on('scroll', function () {
    categoryItemActive();
  });

  // category menu
  var categoryMenuItems = $('.navigation__middle .menu').find('li');
  var categoryMenuMobileItems = $('#mobileMenu').find('.nav-link');
  var categoryScrollItems = categoryMenuItems.map(function() {
    var srollItemId = $(this).find('.link').data('anchor');
    var item = $(srollItemId);
    if (item.length) {
      return item;
    }
  });

  var activeClick = {
    active: false,
    id: null
  }

  $('.navigation .menu .link').click(function() {
    var srollToId = $(this).data('anchor');

    activeClick.active = true;
    activeClick.id = srollToId;

    $('.navigation .menu li').removeClass('-active');
    $(this).parent().addClass('-active');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(srollToId).offset().top
    }, 1000);
  });

  $('#mobileMenu .nav-link a').click(function() {
    var srollToId = $(this).data('anchor');

    activeClick.active = true;
    activeClick.id = srollToId;

    $('#mobileMenu .nav-link').removeClass('-active');
    $(this).parent().addClass('-active');

    $('#mobileMenu').toggleClass('is-closed');
    $('#mobileMenu').toggleClass('is-open');
    $('#mobileMenuOverlay').toggleClass('is-visible');
    $('#pageContent').toggleClass('is-open-right');

    $([document.documentElement, document.body]).animate({
      scrollTop: $(srollToId).offset().top
    }, 1000);
  });

  function categoryItemActive() {
    var fromTop = $(this).scrollTop();
    if (fromTop > 70) {
      $('header').addClass('-scrolled');
    } else {
      $('header').removeClass('-scrolled');
    }
    var cur = categoryScrollItems.map(function() {
      if ($(this).offset().top - 500 < fromTop) {
        return this;
      }
    });

    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (id) {

      if (activeClick.active) {

        if ( activeClick.id == `#${id}` ) {
          activeClick.active = false;
          activeClick.id = null;

          $('.navigation .menu li').removeClass('-active');
          $('#mobileMenu .nav-link').removeClass('-active');
          categoryMenuItems.find('.link').filter("[data-anchor='#"+id+"']").parent().addClass("-active");
          categoryMenuMobileItems.find('a').filter("[data-anchor='#"+id+"']").parent().addClass("-active");
        }

      } else {
        $('.navigation .menu li').removeClass('-active');
        $('#mobileMenu .nav-link').removeClass('-active');
        categoryMenuItems.find('.link').filter("[data-anchor='#"+id+"']").parent().addClass("-active");
        categoryMenuMobileItems.find('a').filter("[data-anchor='#"+id+"']").parent().addClass("-active");
      }

    } else {
      $('.navigation .menu li').removeClass('-active');
      $('#mobileMenu .nav-link').removeClass('-active');
    }
  };

  // Range sliders
  new rSlider({
    target: '#power_rangeSlider',
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    range: false,
    set: [2],
    tooltip: false,
    onChange: function (vals) {
      console.log('onChange', vals);
    }
  });

  new rSlider({
    target: '#duration_rangeSlider',
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    range: false,
    set: [4],
    tooltip: false,
    onChange: function (vals) {
      console.log('onChange', vals);
    }
  });

  new rSlider({
    target: '#forecast_rangeSlider',
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    range: false,
    set: [3],
    tooltip: false,
    onChange: function (vals) {
      console.log('onChange', vals);
    }
  });


  // Calculator details
  $('.total__details-col').on('click', function () {
    $(this).toggleClass('-hidden');
  });
});
