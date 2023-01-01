let deskNav = document.querySelector(".header nav");
let headerSection = document.querySelector(".header");
const welcome = document.querySelector(".welcome");
let DocPage = document.querySelector("html");
let mobileNav = document.querySelector(".mobile-nav");
let closeMobileNav = document.querySelector(".mobile-nav-view img");
let openMobileNav = document.querySelector(".mobile-nav img");
let mobileNavView = document.querySelector(".mobile-nav-view");
let tl = gsap.timeline({ defaults: { ease: "power1.out" } });
let menuBtn = document.querySelectorAll(".img-btn button");
let menuList = document.querySelectorAll(".img-container");

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("scroll", () => {
  if (window.scrollY > headerSection.scrollHeight - 300) {
    deskNav.className = "nav-class";
  } else {
    deskNav.classList.remove("nav-class");
  }
});
function MobileView() {
  if (headerSection.clientWidth <= 481) {
    mobileNav.classList.remove("hide");
    console.log("the time");
  } else {
    mobileNav.classList.add("hide");
  }
}
MobileView();
openMobileNav.addEventListener("click", () => {
  mobileNavView.classList.remove("hide");
});
closeMobileNav.addEventListener("click", () => {
  mobileNavView.classList.add("hide");
});
//Button Menu Initial States
for(i=0;i<menuBtn.length;i++){
  if(i==0){
    menuBtn[i].id='btn-active'
  }
  else{
    menuBtn[i].removeAttribute('id')
  }
}
for (i = 0; i < menuList.length; i++) {
  if (i !== 0) {
    menuList[i].id = "hide";
  } else {
    menuList[i].removeAttribute("id");
  }
}
// Buttton Menu action

menuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    for (i = 0; i < btn.parentElement.children.length; i++) {
      if (btn.parentElement.children[i] == btn) {
        btn.id = "btn-active";
        for (j = 0; j < menuList.length; j++) {
          if (
            menuList[j].classList[1].slice(0, 3) !==
            btn.textContent.toLowerCase().slice(0, 3)
          ) {
            menuList[j].id='hide'
          } else {
            menuList[j].removeAttribute('id')
          }
        }
      } else {
        if (i !== "length" && i !== "item") {
          btn.parentElement.children[i].removeAttribute("id");
        }
      }
    }
  });
});

// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 2, stagger: 0.5 });
// tl.fromTo(
//   ".hero-text h2",
//   { opacity: 0 },
//   { opacity: 1, duration: 3, stagger: 0.5 },
//   "-=2"
// );
// tl.fromTo(
//   ".hero-text button",
//   { x: "-100%", opacity: 0 },
//   { x: "0", duration: 2, opacity: 1 },
//   "-=3"
// );
// gsap.from(
//   ".welcome-txt h2",
//   {
//     scrollTrigger:{
//       trigger:'.welcome-txt',
//       toggleActions:'restart none none none'
//     },
//     x:'-100%',
//     duration:2,

//   },

// );
// gsap.from(".welcome-txt p", {
//   scrollTrigger: {
//     trigger: ".welcome-txt",
//     toggleActions: "restart restart restart none",
//   },
//   opacity: "0",
//   duration: 2,
//   stagger: 0.5,
// });
