//Shevron rotate function

$(".btn-secondary").click(function () {
  $(".fa-chevron-down").toggleClass("rotated");
});

// Function to toggle the bar and click side hide responsive-menu
  
var $el = $(".menu-bar");
var $ee = $(".navlist-mobile");
var $over = $(".overlay_leftsidebar");
$el.click(function(e){
  e.stopPropagation();
  $(".navlist-mobile").toggleClass('expand');
  $(".overlay_leftsidebar").toggleClass('overlay-expand');
  $(".body").toggleClass('body-overflow');



});
$over.click(function(e){
   e.preventDefault();
   console.log("Salam")
   $(".navlist-mobile").removeClass('expand');
   $(".overlay_leftsidebar").removeClass('overlay-expand');
   $(".body").removeClass('body-overflow');
});
//  $($el).on('click',function(e){
  
//    if(($(e.target) != $el) && ($ee.hasClass('expand'))){
//    $ee.removeClass('expand');
//    console.log("yes");
//  }
//  });