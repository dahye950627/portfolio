$(document).ready(function(){
    var $convArrow = $("#convenient .arrow a");
    var isWeb = true;
    var isTablet = true;
    var isMobile = true;

    $("#convenient .img-slider ul li:last").prependTo(".img-slider ul");

    setImgEvent();

    $(window).on("resize", setImgEvent);

    $convArrow.on("click", function(e){
        var isActive = $(this).hasClass("on");
        if(!isActive){
             $convArrow.removeClass("on");
             $(this).addClass("on");
        }
     });

    //기기별 슬라이드 이벤트 재설정
    function setImgEvent(){
        var wid = $(window).width();
        var imgWid;
        
        //web
        if(wid >= 1180){
            imgWid = 380;
            isWeb = false;
            isTablet = true;
            isMobile = true;
            bindingImgEvent(imgWid);
        }

        //tablet
        if(wid >= 800 && wid < 1180){
            imgWid = 330;
            isWeb = true;
            isTablet = false;
            isMobile = true;
            bindingImgEvent(imgWid);
        }

        //mobile
        if(wid >= 540 && wid < 800){
            imgWid = 330;
            isWeb = true;
            isTablet = true;
            isMobile = false;
            bindingImgEvent(imgWid);
        }

        //mobile2
        if(wid >= 399  && wid < 540){
            imgWid = 310;
            isWeb = true;
            isTablet = true;
            isMobile = false;
            bindingImgEvent(imgWid);
        }

        //mobile3
        if(wid < 399){
            imgWid = 310;
            isWeb = true;
            isTablet = true;
            isMobile = false;
            bindingImgEvent(imgWid);
        }
    }

    //이미지 슬라이드 이벤트 바인딩
    function bindingImgEvent(imgWid){
        $("#convenient .prev,#convenient .next").off();
        $("#convenient .img-box ul").css("margin-left","-" + (imgWid + 10) + "px");

        $("#convenient .img-box .controls .next").on("click",function(){
            $("#convenient .img-box ul").stop().animate({"margin-left":"-" + imgWid*2 + "px"},500,function(){
                $(this).children("li").first().appendTo($(this));
                $(this).css({"margin-left":"-" + (imgWid+10) + "px"});
            });
        });
    
        $("#convenient .img-box .controls .prev").on("click",function(){
            $("#convenient .img-box ul").stop().animate({"margin-left":"-10px"},500,function(){
                $(this).children("li").last().prependTo($(this));
                $(this).css({"margin-left":"-" + (imgWid+10) + "px"});
            });
        });
    }
    
})
