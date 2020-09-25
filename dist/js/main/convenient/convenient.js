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
        //브라우저의 크기별 이미지크기가 다르기 때문에 먼저 이벤트 off
        $("#convenient .prev,#convenient .next").off();
        //이미지크기 + padding값 10
        $("#convenient .img-box ul").css("margin-left","-" + (imgWid + 10) + "px");

        //next버튼 클릭 시
        $("#convenient .img-box .controls .next").on("click",function(){
            //이미 왼쪽엔 첫번째이미지가 margin-left로인해 숨겨져있기 때문에
            //이미지의 2개크기만큼 왼쪽으로 이동시켜야함
            $("#convenient .img-box ul").stop().animate({"margin-left":"-" + imgWid*2 + "px"},500,function(){
                //이동시킨뒤 맨앞 이미지 즉 li를 떼서 맨뒤에 append
                $(this).children("li").first().appendTo($(this));
                //append 동시에 <ul>을 이미지 크기만큼 왼쪽으로 이동
                $(this).css({"margin-left":"-" + (imgWid+10) + "px"});
            });
        });
    
        //pre버튼 클릭 시
        $("#convenient .img-box .controls .prev").on("click",function(){
            //왼쪽에 숨겨져있는 첫번째 이미지를 보이도록 하기위해 margin-left
            //를 -10px(padding)으로 변경
            $("#convenient .img-box ul").stop().animate({"margin-left":"-10px"},500,function(){
                //margin-left 변경과 동시에 맨뒤에있는 <li>를 떼서
                //맨앞으로 append
                $(this).children("li").last().prependTo($(this));
                $(this).css({"margin-left":"-" + (imgWid+10) + "px"});
            });
        });
    }
})
