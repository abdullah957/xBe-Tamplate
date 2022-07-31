/*---------------------- Start JS Manpulations-------------  */ 
// Start Variables
const burgerIcons = document.querySelector(".burger-icons");
const linksHandle =document.querySelector(".links");
const links = document.querySelectorAll(".links li a");
const rightArrowLanding = document.querySelectorAll(".landing > .right");
const leftArrowLanding = document.querySelectorAll(".landing > .left");
const bgHandleLanding = document.querySelector(".bg-handle");
const bulletsLanding = document.querySelectorAll(".bullets span");
const bulletsLandingOne = document.querySelector(".bullets span.one");
const bulletsLandingTwo = document.querySelector(".bullets span.two");
const colorsPlate = document.querySelector(".toggle-color");
const colorsTheme = document.querySelectorAll(".color");
const sittingIcon = document.querySelector(".sitting");
const bulletsTeam =document.querySelectorAll(".pulets span");
const teamProfilesContainer =document.querySelector(".team-container");
const teamArrowLeft = document.querySelector(".team .container .arrow.left");
const teamArrowRight = document.querySelector(".team .container .arrow.right");
const PortofolioGraphic = document.querySelectorAll("#portfolio .graphic");
const PortofolioDesign = document.querySelectorAll("#portfolio .design");
const scrollToTop = document.querySelector(".scroll-to-top");
const servicesSection = document.querySelector("#services");
const restColors = document.querySelector(".rest");
//End Variables
//Scroll To top Btn
window.onscroll = function () {
    if(servicesSection.getBoundingClientRect().top <= 0){
        scrollToTop.style.bottom = "30px"
    }else{
        scrollToTop.style.bottom = "100%"

    }
}
scrollToTop.onclick = function () {
    window.scrollTo({
        top:0,
        behavior : "smooth"
        
    })
}
restColors.onclick = (e)=>{
    e.preventDefault()
    localStorage.removeItem("color")
    document.documentElement.style.setProperty('--main-color',"#058BCE" );

}
//Toggle Open,Close Class  When Click On BurgerIcon
burgerIcons.onclick=function(){
    if(this.classList.contains("open")){
            this.classList.remove("open")
            this.classList.add("close");
            this.classList.toggle("active");

    }else if(this.classList.contains("close")){
        this.classList.remove("close")
        this.classList.add("open");
        this.classList.toggle("active");

    }
    linksHandle.classList.toggle("open");
};

//Toggle Landing Background When Click Bullets
bulletsLanding.forEach(bullet => {
    bullet.onclick= ()=>{
        if(bullet.classList.contains("one")){
            bullet.nextElementSibling.classList.remove("active")
            bullet.classList.add("active");
            bgHandleLanding.style.transform=`translateX(0)`;
        }
        else if(bullet.classList.contains("two")){
            bullet.previousElementSibling.classList.remove("active")
            bullet.classList.add("active");
            bgHandleLanding.style.transform=`translateX(-50%)`;
        }
    }
})

//Toggle Landing Background When Click Arrow
rightArrowLanding.forEach(arrow =>{
    arrow.onclick= ()=>{
        if(bulletsLandingOne.classList.contains("active")){
            bgHandleLanding.style.transform=`translateX(-50%)`;
            bulletsLanding.forEach(element => {
            element.classList.remove("active")
            if(element.classList.contains("two")){
                element.classList.add("active")
            }
            
        });
        }else{
            bgHandleLanding.style.transform=`translateX(0)`;
            bulletsLanding.forEach(element => {
            element.classList.remove("active")
            if(element.classList.contains("one")){
                element.classList.add("active")
            }
            
        });
        }

    }
})
leftArrowLanding.forEach(arrow =>{
    arrow.onclick= ()=>{
        if(bulletsLandingTwo.classList.contains("active")){
            bgHandleLanding.style.transform=`translateX(0)`;
            bulletsLanding.forEach(element => {
            element.classList.remove("active")
            if(element.classList.contains("one")){
                element.classList.add("active")
            }
            
        });
        }else{
            bgHandleLanding.style.transform=`translateX(-50%)`;
            bulletsLanding.forEach(element => {
            element.classList.remove("active")
            if(element.classList.contains("two")){
                element.classList.add("active")
            }
            
        });
        }

    }
});

if(window.localStorage.hasOwnProperty("color")){
    document.documentElement.style.setProperty('--main-color',window.localStorage.color );

}

//Add Colors To Color Theme 
colorsTheme.forEach(color=>{
    color.style.backgroundColor=color.getAttribute("data-color");
    color.onclick= _ =>{
        window.localStorage.color = color.getAttribute("data-color")
        document.documentElement.style.setProperty('--main-color',color.getAttribute("data-color") );
    }
})

//Toggle Open Class To Color Theme Plate
sittingIcon.onclick= _=>{
    colorsPlate.classList.toggle("open")
}


//Toggle Team Profile When Click On Bullets
//Add Active Class To Clicked Bullet And Remove It From Siblings
bulletsTeam.forEach(bullet=>{
    bullet.onclick= _ =>{
        bulletsTeam.forEach(b=>{
            b.classList.remove("active")
        })
        if(bullet.classList.contains("one")){
            bullet.classList.add("active")
            teamProfilesContainer.style.transform=`translateX(0)`
        }
        else if(bullet.classList.contains("two")){
            bullet.classList.add("active")
            teamProfilesContainer.style.transform=`translateX( calc(-100% / 3))`
        }
        else if(bullet.classList.contains("three")){
            bullet.classList.add("active")
            teamProfilesContainer.style.transform=`translateX( calc(( -100% / 3) * 2))`
        }
    }
});

//Portofolio Manpulation

PortofolioGraphic.forEach(p =>{
    p.onclick = function (e) {
        e.preventDefault()
        window.open("../portofolioModuleOne.html","")
    }
})
PortofolioDesign.forEach(p =>{
    p.onclick = function (e) {
        e.preventDefault()
        window.open("../portofolioModuleTwo.html","")
    }
});

 //Clients Manpulation
    let nextCleint = document.getElementById("signsSwiper");
    nextCleint.style.display  = "none"
    setInterval(function () {
            nextCleint.click()
        },6000)

/*---------------------- End JS Manpulations-------------  */ 

