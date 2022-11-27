console.clear();

const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));
const backLink = `<li class="nav-item" style="border-top:none">
	<a class="nav-link nav-back-link" href="javascript:;">
  <div class="branding-title">
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
  <path d="M9.63561 18.8061C9.88367 18.5581 9.88367 18.155 9.63561 17.9069L1.71313 9.99994L9.63561 2.07746C9.88367 1.8294 9.88367 1.4263 9.63561 1.17823C9.38755 0.930172 8.98445 0.930172 8.73638 1.17823L0.379792 9.53482C0.255761 9.65885 0.193747 9.81389 0.193747 9.98444C0.193747 10.1395 0.255761 10.31 0.379792 10.434L8.73638 18.7906C8.98445 19.0542 9.38755 19.0542 9.63561 18.8061Z" fill="#32323D"/>
  </svg>
  <img src="image/logo.png">
</div>
	</a>
</li>`;

navExpand.forEach(item => {
  item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink);
  item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'));
  item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'));
});


// ---------------------------------------
// not-so-important stuff starts here

const ham = document.getElementById('ham');
ham.addEventListener('click', function () {
  document.body.classList.toggle('nav-is-toggled');
});
const ham1 = document.getElementById('closemenu');
ham1.addEventListener('click', function () {
  document.body.classList.toggle('nav-is-toggled');
});

$(document).ready(function () {

  $(window).scroll(function () {
    if ($(document).scrollTop() > 1) {
      $('header').animate({
        'top': '0'
      }, 0);
      $('.menu .nav a').animate({
        'padding': '15px 0'
      }, 0);
      $('.menu .nav li.active::before').animate({
        'bottom': '-17px'
      }, 0);
      $('header').delay(10).fadeIn(400);
    } else {
      $('header').animate({
        'top': '115px'
      }, 0);
      $('.menu .nav a').animate({
        'padding': '20px 0'
      }, 0);
      $('.menu .nav li.active::before').animate({
        'bottom': '-28px'
      }, 0);
    }
  });


  $('.search-btn').click(function (e) {
    $(".search-wrapper").toggleClass("show-search");
  });
  $(window).click(function (event) {
    var $target = $(event.target);
    var $parent = $target.closest(".search-wrapper");
    var $show = $target.closest(".search-btn");
    if ($parent.length == 0 && $show.length == 0) {
      var $menu = $('.search-wrapper');
      $menu.removeClass("show-search");
    }
  });

  $('.language-toggle').click(function (e) {
    $(".listlanguage").toggleClass("show-popup");
  });
  $(window).click(function (event) {
    var $target = $(event.target);
    var $parent = $target.closest(".listlanguage");
    var $show = $target.closest(".language-toggle");
    if ($parent.length == 0 && $show.length == 0) {
      var $menu = $('.listlanguage');
      $menu.removeClass("show-popup");
    }
  });

  $('.user').click(function (e) {
    $(".myprofile").toggleClass("show-popup");
  });
  $(window).click(function (event) {
    var $target = $(event.target);
    var $parent = $target.closest(".myprofile");
    var $show = $target.closest(".user");
    if ($parent.length == 0 && $show.length == 0) {
      var $menu = $('.myprofile');
      $menu.removeClass("show-popup");
    }
  });

  $('.notif').click(function (e) {
    $(".box-notifi").toggleClass("show-popup");
  });
  $(window).click(function (event) {
    var $target = $(event.target);
    var $parent = $target.closest(".box-notifi");
    var $show = $target.closest(".notif");
    if ($parent.length == 0 && $show.length == 0) {
      var $menu = $('.box-notifi');
      $menu.removeClass("show-popup");
    }
  });
  $('.search-btn').click(function (e) {
    $(".sugges-search").toggleClass("show-popup");
  });
  $(window).click(function (event) {
    var $target = $(event.target);
    var $parent = $target.closest(".sugges-search");
    var $show = $target.closest(".search-btn");
    if ($parent.length == 0 && $show.length == 0) {
      var $menu = $('.sugges-search');
      $menu.removeClass("show-popup");
    }
  });
  //áº©n hiá»‡n in mobile
  $('.slide-mobile').click(function (event) {
    event.preventDefault();
    var $target = $(event.target);
    var $li = $(this).closest('li');
    var $submenu = $li.children('.sub-content');
    var $a = $li.children('a');
    var level = $li.attr('data-level');
    if ($submenu.css('display') && $submenu.css('display') == 'block') {
      $submenu.slideUp();
      $a.removeClass("dot-arrow");
    } else {
      var $liRelatedLevel = $('.slide-mobile[data-level="' + level + '"]');
      $liRelatedLevel.find('.sub-content').slideUp();
      var $liRelatedLevel = $('.slide-mobile');
      $liRelatedLevel.find('a').removeClass("dot-arrow");
      $submenu.slideDown();
      $a.addClass("dot-arrow");
    }
    return false;
  })

  //popup
  $('.detail-sh').click(function (e) {
    $(".popup-style").toggleClass("show-popup");
    $(".overlay").toggleClass("show-popup");
  });
  $(window).click(function (event) {
    var $target = $(event.target);
    var $parent = $target.closest(".popup-style");
    var $show = $target.closest(".detail-sh");
    if ($parent.length == 0 && $show.length == 0) {
      var $menu = $('.popup-style');
      $menu.removeClass("show-popup");
      var $overlay = $('.overlay');
      $overlay.removeClass("show-popup");
    }
  });

  $('.close-popup').click(function () {
    var $popup = $('.popup-style');
    $popup.removeClass("show-popup");
    $(".overlay").removeClass("show-popup");
  })


});
