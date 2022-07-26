/*global $ , JQuery , alert*/
$(document).ready(function () {

//Nice Scroll

$("html").niceScroll();


  $(".carousel").carousel({
    interval: 2000,
  });



  //Loading Elements

  $(".loading-overlay .spinner").fadeOut(1000, function () {
    $("body").css("overflow", "auto");

    $(this)
      .parent()
      .fadeOut(1000, function () {
        $(this).remove();
      });
  });

  // Show Color Option Div When Click In The Gear

  $(".gear-check").click(function () {
    $(".color-option").toggle({});

    // Change Theme Color On Click

    var colorLi = $(".color-option ul li");

    colorLi
      .eq(0)
      .css("backgroundColor", "#E41B17")
      .end()
      .eq(1)
      .css("backgroundColor", "#E41766")
      .end()
      .eq(2)
      .css("backgroundColor", "#B3FF00")
      .end()
      .eq(3)
      .css("backgroundColor", "#2F00FF");

    colorLi.click(function () {
      $("link[href*='Theme']").attr("href", $(this).attr("data-value"));
    });
  });

  //Caching The Scroll Top Element

  var scrollButton = $("#scroll-top");

  $(window).scroll(function () {
    $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
  });

  scrollButton.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600); 
  });

});
