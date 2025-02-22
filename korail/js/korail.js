function click() {return;}

// nav
$(function () {
  $(".nav.n01 .inner .Lmenu .menu a").each(function() {
    let $1menuindex = $(this).index();
    let $1menu = $(".nav.n02 .inner .menu").children("div");
    $(this).click(function() {
      $(".nav.n02 .inner .menu").children("div").removeClass('on');
      $($1menu).eq($1menuindex).addClass('on').siblings().removeClass('on');
      if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        $($1menu).removeClass('on').children().removeClass('on');
    } else {
        $("nav").addClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    }
  });
  });

  $('.nav.n02 .inner .menu div li.more').each(function() {
    let $2menuindex = $(this).index();
    let $2menu = $(this).parent("ul").next("div").children('.contentlist');
    $(this).click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $($2menu).eq($2menuindex).addClass('on').siblings().removeClass('on');
    });
  });
  $('.contentlist li a').click(function() {
      $(this).addClass('on').parent('li').siblings().children('a').removeClass('on');
  });
});

// side
$(function () {
  $("#Roffbt").click(function () {
    $("header .side .right.side").toggleClass('off');
  });
  $("#Loffbt").click(function () {
    $("header .side .left.side").toggleClass('off');
  });
});

// sec01 - ticket
$(function () {
  $(".sec01 .inner .ticket").children("li").click(function () {
    $(".sec01 .inner .ticket li").children("h5").removeClass('on');
    $(this).children("h5").toggleClass('on');
  });
});

// sec01 - select
$(function () {
  $(".sec01 .inner .ticket .common").click(function () {
    $(".sec01 .inner .select").children().addClass('hide'),
    $(".sec01 .inner .select").children(".common").removeClass('hide')
  });
  $(".sec01 .inner .ticket .discount").click(function () {
    $(".sec01 .inner .select").children().addClass('hide'),
    $(".sec01 .inner .select").children(".discount").removeClass('hide')
  });
  $(".sec01 .inner .ticket .fourGp").click(function () {
    $(".sec01 .inner .select").children().addClass('hide'),
    $(".sec01 .inner .select").children(".fourGp").removeClass('hide')
  });
  $(".sec01 .inner .ticket .trip").click(function () {
    $(".sec01 .inner .select").children().addClass('hide'),
    $(".sec01 .inner .select").children(".trip").removeClass('hide')
  });
});

//sec05
$(function () {
  $("#notice").click(function () {
    $(".sec05 .Notice .tab li").children("h5").removeClass('on');
    $(this).addClass('on');
    $(".sec05 .Notice .content").children("div").removeClass('on');
    $(".sec05 .Notice .content").children(".Notice01").addClass('on');
  });
  $("#Announcement").click(function () {
    $(".sec05 .Notice .tab li").children("h5").removeClass('on');
    $(this).addClass('on');
    $(".sec05 .Notice .content").children("div").removeClass('on');
    $(".sec05 .Notice .content").children(".Notice02").addClass('on');
  });
  $("#event").click(function () {
    $(".sec05 .Notice .tab li").children("h5").removeClass('on');
    $(this).addClass('on');
    $(".sec05 .Notice .content").children("div").removeClass('on');
    $(".sec05 .Notice .content").children(".Notice03").addClass('on');
  });
});

// .popup
$(function () {
  $(".departure").click(function () {
    $(".popup").removeClass('hide')
  });

  $(".arrival").click(function () {
    $(".popup").removeClass('hide')
  });

  $(".popup button.close").click(function () {
    $(".popup").addClass('hide')
  });
});


// sec01배경
var swiper = new Swiper(".mySwiper01", {
  slidesPerView: 1,
  // spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// sec02
var swiper = new Swiper(".mySwiper02", {
  slidesPerView: 6,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// sec03
var swiper = new Swiper(".mySwiper03", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});