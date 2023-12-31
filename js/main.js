$(function () {
  $(".nav").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });
  $(".nav__menu-btn").on("click", function () {
    $(".nav__menu-btn").toggleClass("nav__menu-btn--active");
    $(".nav__menu").toggleClass("nav__menu--active");
    $("body").toggleClass("hidden");
  });
  $(".nav__menu-item").on("click", function () {
    $(".nav__menu").removeClass("nav__menu--active");
    $(".nav__menu-btn").removeClass("nav__menu-btn--active");
    $("body").removeClass("hidden");
  });
});
