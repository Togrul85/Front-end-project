let isAnimated1 = false;
let isAnimated2 = false;
let isAnimated3 = false;
let isAnimated4 = false;
let isAnimated5 = false;


$(window).scroll(function () {
    let scroll = $(window).scrollTop();
   

    
    if (scroll >= $(".padding-top").offset().top - $(window).height() && !isAnimated1) {
        setTimeout(function () {
           $(".card-1").animate({ top: '0', opacity: '1' }, 'slow')
           });
        setTimeout(function () 
        { $(".card-2").animate({ top: '0', opacity: '1' }, 'slow') 
      }, 200);
        setTimeout(function () 
        { $(".card-3").animate({ top: '0', opacity: '1' }, 'slow')
       }, 400);
        setTimeout(function () 
        { $(".card-4").animate({ top: '0', opacity: '1' }, 'slow') 
      }, 600);
        isAnimated1 = true;
    }

  


  const btn=document.querySelectorAll(".case");
  const text=document.querySelector("#cloud");
  btn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      console.log("SAdffsa");
      if (text.classList.contains("active")) {
        text.classList.remove("active");
        
      }
      else{
        text.classList.add("active");
      }
      if (text.classList.contains("active")) {
        text.classList.remove("d-none");
        
      }else {
        text.classList.add("d-none");
      }
    })
  })
})



