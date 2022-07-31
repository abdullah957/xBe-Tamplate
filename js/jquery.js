/*---------------------- Start JQuery Manpulations-------------  */ 
$(function(){
    
//Start JQuery Variables
    addpad=$("body .addpad");
    li=$("body  .link");
    burgerIc=$("body #header .container .nav .burger-icons");
    linksJquery=$("body #header .container .nav .links");
    header=$("#header")

//End JQuery Variables
    //Add Padding To Sections Aquel To Header Height
    addpad.each(function(){
        $(this).css("padding-top",header.height())
    });
    li.each(function(){
        //When Click On Link
        $(this).on("click",function(e){
            e.preventDefault();
            //Remove Active Class From All Links 
            li.each(function(){
                $(this).removeClass("active");
            });
            //Add Active class To Clicked Link
            $(this).addClass("active");
            //Remove Active Class & Remove Close From BurgerIcon 
            burgerIc.removeClass("active");
            burgerIc.removeClass("close");
            //Add  Open Class To BurgerIcon 
            burgerIc.addClass("open");
            //Remove Open Class From Links Handle (ul)
            linksJquery.removeClass("open");
            
        });
    });

    // Smooth Scroll When Click On Links 
    li.each(function(){
        $(this).click(function(){
            $("html ,body").animate({
                scrollTop:$("#"+$(this).data("scroll")).offset().top + 1,
                behavior:"smooth"
            },600)
        })
    });

    $(window).scroll(function() {
        //Shrink Header Height When Scroll Bottom
        if($(window).scrollTop() >= 200){
            header.addClass("scroll")
        }else{
            header.removeClass("scroll")
        }
        //Sync Links With There Sections On Scroll
        $(".block").each(function(){
            linkId=$(this).attr("id");
            if($(window).scrollTop() >= $(this).offset().top ){
                li.each(function(){
                    links.forEach(link=>{
                    link.classList.remove("active")
                })
                $('.container .nav ul li a[data-scroll="'+linkId+'"]').addClass("active")
                    
                })
            }
        })        


    })

    //Portifolio Manpu

    $("body .portfolio-container .control-panel li").each(function () {
        $(this).click(function () {
            filter = $(this).attr("data-filter");

            $("body .items-container .item").each(function () {
                $(this).slideUp(300,function () {
                    if(filter == "all"){
                        $(this).fadeIn(1000)
                    }
                    if($(this).attr("data-item") == filter){
                    $(this).fadeIn(500)
                }
                })
                
            })

        })
    });




});



/*---------------------- End JQuery Manpulations-------------  */ 
