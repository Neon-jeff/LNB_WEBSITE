let deskNav = document.querySelector(".header nav");
let headerSection = document.querySelector(".header");
const welcome = document.querySelector(".welcome");
let DocPage = document.querySelector("html");
let mobileNav=document.querySelector('.mobile-nav')
let closeMobileNav=document.querySelector('.mobile-nav-view img')
let openMobileNav=document.querySelector('.mobile-nav img')
let mobileNavView=document.querySelector('.mobile-nav-view')
window.addEventListener('scroll',()=>{
    if(window.scrollY>headerSection.scrollHeight-300){
        deskNav.className='nav-class'
    }
    else{
        deskNav.classList.remove('nav-class')
    }
})
function MobileView(){
    if (headerSection.clientWidth <= 481) {
      mobileNav.classList.remove("hide");
      console.log("the time");
    }
    else{
        mobileNav.classList.add('hide')
    }
    console.log('mobile')
}
MobileView()
openMobileNav.addEventListener('click',()=>{
    mobileNavView.classList.remove('hide')
})
closeMobileNav.addEventListener('click',()=>{
    mobileNavView.classList.add("hide");
    document.querySelector('body').style.overflowY='hidden'
})