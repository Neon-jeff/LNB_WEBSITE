let deskNav = document.querySelector(".header nav");
let headerSection = document.querySelector(".header");
const welcome = document.querySelector(".welcome");
let DocPage = document.querySelector("html");
let mobileNav = document.querySelector(".mobile-nav");
let closeMobileNav = document.querySelector(".mobile-nav-view img");
let openMobileNav = document.querySelector(".mobile-nav img");
let mobileNavView = document.querySelector(".mobile-nav-view ");
let tl = gsap.timeline({ defaults: { ease: "power1.out" } });
let menuBtn = document.querySelectorAll(".img-btn button");
let menuList = document.querySelectorAll(".img-container");
let mobileNavLinks = document.querySelectorAll(".mobile-nav-view p");

gsap.registerPlugin(ScrollTrigger);
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    gsap.fromTo(
      ".mobile-nav-view",
      { x: "0", duration: 1, opacity: 1 },
      { x: "-100%", opacity: 0 }
    );
  });
});
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
  gsap.fromTo(
    ".mobile-nav-view",
    { x: "-100%", opacity: 0 },
    { x: "0", duration: 1, opacity: 1 }
  );
});
closeMobileNav.addEventListener("click", () => {
  gsap.fromTo(
    ".mobile-nav-view",
    { x: "0", duration: 1, opacity: 1 },
    { x: "-100%", opacity: 0 }
  );
  // mobileNavView.classList.add("hide");
});
//Button Menu Initial States
for (i = 0; i < menuBtn.length; i++) {
  if (i == 0) {
    menuBtn[i].id = "btn-active";
  } else {
    menuBtn[i].removeAttribute("id");
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
            menuList[j].id = "hide";
          } else {
            menuList[j].removeAttribute("id");
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

tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 2, stagger: 0.5 });
tl.fromTo(
  ".hero-text h2",
  { opacity: 0 },
  { opacity: 1, duration: 3, stagger: 0.5 },
  "-=2"
);
tl.fromTo(
  ".hero-text button",
  { x: "-100%", opacity: 0 },
  { x: "0", duration: 2, opacity: 1 },
  "-=3"
);
gsap.from(".welcome-txt h2", {
  scrollTrigger: {
    trigger: ".welcome-txt",
    toggleActions: "restart restart restart none",
  },
  x: "-100%",
  duration: 2,
});
gsap.from(".welcome-txt p", {
  scrollTrigger: {
    trigger: ".welcome-txt",
    toggleActions: "restart restart restart none",
  },
  opacity: "0",
  duration: 2,
  stagger: 0.5,
});
gsap.from(
  ".img-container",
  {
    scrollTrigger: {
      trigger: ".menu ",
      toggleActions: "restart restart restart restart",
    },
    x: "-100%",
    duration: 1,
    stagger: 0.5,
  },
  "-=2"
);
gsap.from(
  ".choose h2",
  {
    scrollTrigger: {
      trigger: ".choose ",
      toggleActions: "restart restart restart restart",
    },
    opacity: "0",
    duration: 1.5,
    stagger: 0.5,
  },
  "-=2"
);

gsap.from(
  ".choose .choices",
  {
    scrollTrigger: {
      trigger: ".choose ",
      toggleActions: "restart restart restart restart",
    },
    opacity: "0",
    duration: 1.5,
    stagger: 0.5,
  },
  "-=2"
);
gsap.from(
  ".reviews h2",
  {
    scrollTrigger: {
      trigger: ".reviews ",
      toggleActions: "restart restart restart restart",
    },
    opacity: "0",
    duration: 1.5,
    stagger: 0.5,
  },
  "-=2"
);

gsap.from(
  ".reviews .cards div",
  {
    scrollTrigger: {
      trigger: ".reviews ",
      toggleActions: "restart restart restart restart",
    },
    opacity: "0",
    duration: 1.5,
    stagger: 0.5,
  },
  "-=2"
);
