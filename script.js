// Text Reveal in Homepage

window.addEventListener('scroll', reveal);

function reveal (){
    var reveals = document.querySelectorAll('.reveal');
    
    for (var i = 0; i < reveals.length; i ++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}


window.addEventListener('scroll', reveal1);

function reveal1 (){
    var reveals = document.querySelectorAll('.reveal1');
    
    for (var i = 0; i < reveals.length; i ++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal2);

function reveal2 (){
    var reveals = document.querySelectorAll('.reveal2');
    
    for (var i = 0; i < reveals.length; i ++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}


// JAVASCRIPT FOR IMAGE CAROUSEL
const swiper = new Swiper('.swiper', { 
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


//JAVASCRIPT FOR BACK TO TOP BUTTON
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 700) {
    toTop.classList.add('active');
  }else{
    toTop.classList.remove('active');
  }
})

function Function() {
  alert("Thank you for requesting an appointment!");
}