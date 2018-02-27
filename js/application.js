$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("nav").css("background", "#fff").css("box-shadow", "0 0 5px #ccc");
      $("nav .navRight .downloadWhitePaper").addClass("downloadWhitePaperTwo").removeClass("downloadWhitePaperOne");
      $("nav .navLeft  .navLogo").addClass("replaceLogoOne").removeClass("replaceLogoTwo");
      $("nav .equalThan ").addClass("moreThan").removeClass("equalThan");
    } else {
      $("nav").css("background", "transparent").css("box-shadow", "0 0 0");
      $("nav .navRight .downloadWhitePaper").addClass("downloadWhitePaperOne").removeClass("downloadWhitePaperTwo");
      // $("nav .navRight .downloadWhitePaper").css("color", "#1c49ae");
      $("nav .navLeft  .navLogo").addClass("replaceLogoTwo").removeClass("replaceLogoOne");
      $("nav .moreThan ").addClass("equalThan").removeClass("moreThan");
    }
  })
});