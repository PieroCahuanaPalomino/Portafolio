/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)







/*==================SERVICES MODAL=========================*/
const modalViews = document.querySelectorAll(".services__modal");
modalBtns= document.querySelectorAll(".services__button");
modalClose= document.querySelectorAll(".services__modal-close");

let modal=function(modalClick){
	modalViews[modalClick].classList.add("active-modal")
}
modalBtns.forEach((mb,i)=>{
	mb.addEventListener("click",()=>{
		modal(i)
	})
})

modalClose.forEach((mc)=>{
	mc.addEventListener("click",()=>{
		modalViews.forEach((ev)=>{
			ev.classList.remove("active-modal")
		})
	})
});
/*WORK*/




/*MIXITUP FILTER*/

let mixerPortafolio=mixitup('.work__container',{
	selectors: {
		target:'.work__card'
	},
	animation: {
		duration:300
	}
});

const linkWork=document.querySelectorAll(".work__item");
function activeWork(){
	linkWork.forEach(l=>l.classList.remove("active__work"))
	this.classList.add("active__work")
}
linkWork.forEach(l=>l.addEventListener('click',activeWork))

/*SWIPER*/

    let swiperTestimonial = new Swiper(".testimonial__container", {
        spaceBetween: 24,
        loop:true,
        grabCursor:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
         breakpoints: {
          576: {
            slidesPerView: 2,

          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
         
        },
      });


/*ACTIVE LINK*/
/*
  const $lista=document.querySelectorAll(".nav__item");

  console.log($lista);

function funcionScroll(p){
  for(let k=0;k<5;k++){
    if(k==p){
        $lista[k].classList.add("active-link");                       
    }
    else{
      $lista[k].classList.remove("active-link");                              
    }
  } 
}

*/

/*
  $lista.forEach(elementos=>{
    console.log(elementos);
  })

  $lista.forEach((elementos,i)=>{
    elementos.addEventListener("click",evento=>{
      
        console.log(evento.target);       
        console.log("sisisisi");
        
        console.log(i);
        funcionScroll(i);
    })
  })

*/
/*SCROLL*/



  const li=document.querySelectorAll(".nav__item");
  const sec=document.querySelectorAll(".section2");

  function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
      li.forEach(ltx=>ltx.classList.remove("active-link"));
      li[len].classList.add("active-link");

  }
  activeMenu();
  window.addEventListener("scroll",activeMenu);




/*BLANVO*/

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




/**/
  
const sr= ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`,{delay:700})
sr.reveal(`.home__social,.home__scroll`,{delay:900,origin:'bottom'})





const img=document.querySelectorAll(".work__img");
const imagenes=document.querySelectorAll('.work__button');
console.log(img[2]);
const imagenesLight=document.querySelector('.agregar-imagen');
const contenedorLight=document.querySelector('.imagen-light');


console.log(imagenes);
console.log(imagenesLight);
console.log(contenedorLight);

//recorriendo las 6 imagenes
imagenes.forEach((imagen,i)=>{
  imagen.addEventListener('click',()=>{ 
  aparecerImagen(img[i].getAttribute('src'));
  })
})

contenedorLight.addEventListener('click',(e)=>{
  if(e.target !== imagenesLight){
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');

  }
})

const aparecerImagen=(imagen)=>{
  imagenesLight.src=imagen;
  contenedorLight.classList.toggle('show');
  imagenesLight.classList.toggle('showImage');

}