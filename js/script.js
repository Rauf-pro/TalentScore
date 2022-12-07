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

// Password eye change functions

$("#eye").on("click", function() {
  var image_1 = $("#eyeImage");
  var img1_src = "assets/icons/eye.png";
  var img2_src = "assets/icons/close-eye.png";
    
  if (image_1.attr("src") == img1_src) {
      
      image_1.attr("src", img2_src);
    } else {
      image_1.attr("src", img1_src);
    }
});

const passwordInput = document.querySelector("#password");
const eye = document.querySelector("#eye");

eye.addEventListener("click", function(){
  
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
  passwordInput.setAttribute("type", type)
})



