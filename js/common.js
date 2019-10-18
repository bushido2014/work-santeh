$(function() {

	
$('.home-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  });


/*Sticky Header Function*/
    jQuery(window).scroll(function() {    
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 155) {
            jQuery('.scroll-nav').addClass('fixed-header');
        } else {
            jQuery('.scroll-nav').removeClass('fixed-header');
        }
    });
    /*Sticky Header Function*/

$('.td-toogle tr').tooltip({
    animated: 'fade',
    placement: 'right',
    html: true
});


$('#tableColor').click(function(){
  $('#tableColor').toggleClass('collapsed ActiveClass');     
});

$('#tableColor2').click(function(){
  $('#tableColor2').toggleClass('collapsed ActiveClass');     
});

$('#tableColor3').click(function(){
  $('#tableColor3').toggleClass('collapsed ActiveClass');     
});

$('#tableColor4').click(function(){
  $('#tableColor4').toggleClass('collapsed ActiveClass');     
});
$('#tableColor5').click(function(){
  $('#tableColor5').toggleClass('collapsed ActiveClass');     
});




$('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
  });
  $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
  });





});


