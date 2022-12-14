$("#eye-log").on("click", function() {
    var image_3 = $("#eyeImageLog");
    var img3_src = "assets/icons/eye.png";
    var img4_src = "assets/icons/close-eye.png";
      
    if (image_3.attr("src") == img3_src) {
        
        image_3.attr("src", img4_src);
      } else {
        image_3.attr("src", img3_src);
      }
  });
  
  const logPasswordInput = document.querySelector("#logPassword");
  const eyeLog = document.querySelector("#eye-log");
  
  eyeLog.addEventListener("click", function(){
    
    const type3 = logPasswordInput.getAttribute("type") === "password" ? "text" : "password"
    logPasswordInput.setAttribute("type", type3)
  })