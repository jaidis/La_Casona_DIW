$('#principal').hide().addClass("hide").addClass("fade");
$('.h1-cabecera').hide().addClass("hide").addClass("fade");
$('.h3-cabecera').hide().addClass("hide").addClass("fade");
$('.container-2').hide().addClass("hide").addClass("fade");
// $('#jumbo-1').hide().addClass("hide").addClass("fade");
// $('#jumbo-2').hide().addClass("hide").addClass("fade");
// $('#jumbo-3').hide().addClass("hide").addClass("fade");
// $('#jumbo-4').hide().addClass("hide").addClass("fade");
$(document).ready(function() {
  $('#principal').show();
  $('.h1-cabecera').show();
  $('.h3-cabecera').show();
  $('.container-2').show();
  // $('#jumbo-1').show();
  // $('#jumbo-2').show();
  // $('#jumbo-3').show();
  // $('#jumbo-4').show();
  setTimeout(() => {
    $('#principal').addClass("show").removeClass("hide");
  }, 100);
  setTimeout(() => {
    $('.h1-cabecera').addClass("show").removeClass("hide");
  }, 800);
  setTimeout(() => {
    $('.h3-cabecera').addClass("show").removeClass("hide");
  }, 1300);
  setTimeout(() => {
    $('.container-2').addClass("show").removeClass("hide");
  }, 1700);
  // setTimeout(() => {
  //   $('#jumbo-1').addClass("show").removeClass("hide");
  // },2000);
  // setTimeout(() => {
  //   $('#jumbo-2').addClass("show").removeClass("hide");
  // },3000);
  // setTimeout(() => {
  //   $('#jumbo-3').addClass("show").removeClass("hide");
  // },4000);
  // setTimeout(() => {
  //   $('#jumbo-4').addClass("show").removeClass("hide");
  // },5000);

});
