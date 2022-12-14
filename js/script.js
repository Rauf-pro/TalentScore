//Shevron rotate function

$(".btn-cabinet").click(function () {
  $(".chevron-cabinet").toggleClass("rotated");
});
$(".btn-lang").click(function () {
  $(".chevron-language").toggleClass("rotated");
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
 

// Password eye change functions

$("#eye1").on("click", function() {
  var image_1 = $("#eyeImage1");
  var img1_src = "assets/icons/eye.png";
  var img2_src = "assets/icons/close-eye.png";
    
  if (image_1.attr("src") == img1_src) {
      
      image_1.attr("src", img2_src);
    } else {
      image_1.attr("src", img1_src);
    }
});

const passwordInput = document.querySelector("#password");
const eye1 = document.querySelector("#eye1");

eye1.addEventListener("click", function(){
  
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
  passwordInput.setAttribute("type", type)
})

$("#eye2").on("click", function() {
  var image_2 = $("#eyeImage2");
  var img1_src = "assets/icons/eye.png";
  var img2_src = "assets/icons/close-eye.png";
    
  if (image_2.attr("src") == img1_src) {
      
      image_2.attr("src", img2_src);
    } else {
      image_2.attr("src", img1_src);
    }
});

const rePasswordInput = document.querySelector("#rePassword");
const eye2 = document.querySelector("#eye2");

eye2.addEventListener("click", function(){
  
  const type2 = rePasswordInput.getAttribute("type") === "password" ? "text" : "password"
  rePasswordInput.setAttribute("type", type2)
})

// For login show password




