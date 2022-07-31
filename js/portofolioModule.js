const portofolioModuleBtns = document.querySelectorAll(".btn-portfolio")
const portofolioModuleCloseSigns = document.querySelectorAll(".close-portofolio-module")


portofolioModuleBtns.forEach(btn =>{
    btn.onclick = function (e) {
        e.preventDefault()
        window.close()
    }
})
portofolioModuleCloseSigns.forEach(sign =>{
    sign.onclick = function (e) {
        e.preventDefault()
        window.close()
    }
})