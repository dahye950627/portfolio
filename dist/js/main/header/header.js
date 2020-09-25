$(document).ready(function(){
    var $util = $("#header .util");
    var $mUtil = $("#header .mGnbWrap .mUtil");
    var $loading = $("#loading");
    var $gnb = $("#gnb>ul");
    var $mGnb = $("#mGnb");
    var $mGnbBtn = $(".btn-gnb");
    var $gnb_li = $("#gnb>ul>li");
    var $gnb_li_a = $("#gnb>ul li a");
    var $gnb_li_ul = $("#gnb>ul li ul");
    var $navi_li = $("#navi>ul>li");
    var $navi_li_a = $("#navi>ul li a");
    var $scroll = $(".myScroll");

    var isLoginPopup = true;
    var popupSpeed = 700;
    var ht_gnb_max = 0;
    var ht_gnb_1depth = $gnb_li.outerHeight();
    var gnbSpeed = 500;
    var isCloseSub = true;
    var base = 300;
    var isConvOn = false;

    var section1 = $("#header").offset().top;
    var section2 = $("#rooms").offset().top;
    var section3 = $("#banner").offset().top;
    var section4 = $("#convenient").offset().top;
    var section5 = $("#board").offset().top;
    var section6 = $("#slides").offset().top;   


    //레이어팝업 쿠키
    var cookieData = document.cookie;
    //현재 브라우저의 쿠키를 가져와서 밑의 setCookie 함수에서 
    //설정해놓은 쿠키가 있는지 확인 후 팝업창을 보여줄지 결정
    if(cookieData.indexOf("today=done") < 0){
        $("#popup").show();
    }else {
        $("#popup").hide();
    }

    getSubMaxHeight();

    $(window).on("load",function(){
        setTimeout(function(){
            scrollTo(0,0);
        },100);
        $loading.fadeOut();
    });


    $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();
    
        $navi_li.removeClass("on");
        $scroll.removeClass("on");

        //header
        if(scroll >= section1-base && scroll < section2-base){
            if(!$navi_li.eq(0).hasClass("on")){
                $navi_li.eq(0).addClass("on");
                $scroll.eq(0).addClass("on");
            }
        }
        //rooms
        if(scroll >= section2-base && scroll < section3-base){
            if(!$navi_li.eq(1).hasClass("on")){
                $navi_li.eq(1).addClass("on");
                $scroll.eq(1).addClass("on");
            }
        }

       //banner
        if(scroll >= section3-base && scroll < section4-base){
            if(!$navi_li.eq(2).hasClass("on")){
                $navi_li.eq(2).addClass("on");
                $scroll.eq(2).addClass("on");
            }

            var curScroll = scroll - (section3 - base);
            var line = curScroll * 250;
            (line > 70000) ? line = 70000 : line = curScroll * 250;
            $("#banner .svg path").css({
                "stroke-dashoffset": 70000 - line
            });
        }

        //convenient
        if(scroll >= section4-base && scroll < section5-base){
            if(!$navi_li.eq(3).hasClass("on")){
                $navi_li.eq(3).addClass("on");
                $scroll.eq(3).addClass("on");

                if(!isConvOn){
                    startConvEvent();
                    isConvOn = true;
                }
            }
        }
        //board
        if(scroll >= section5-base && scroll < section6-base){
            if(!$navi_li.eq(4).hasClass("on")){
                $navi_li.eq(4).addClass("on");
                $scroll.eq(4).addClass("on");
            }
        }
    });
    

    //로그인 팝업창 생성
    $util.children().eq(0).children().on("click",function(e){
        e.preventDefault();
        createLoginForm();
    });

    //로그인 팝업창 생성 (모바일gnb)
    $mUtil.children().eq(0).children().on("click",function(e){
        e.preventDefault();
        createLoginForm();
    });

    //로그인 팝업창 닫기
    $("body").on("click","#loginPopup .close",function(){
        $("#loginPopup").fadeOut(popupSpeed);
        $("#loginPopup .loginBox").fadeOut(popupSpeed,function(){
            $("#loginPopup").remove();
        });
        
        isLoginPopup = true;
    });

    $navi_li_a.on("click",function(e){
        e.preventDefault();
        var $target_li = $(this).parent();
        var index = $target_li.index();

        $('html,body').stop().animate({scrollTop : $scroll.eq(index).offset().top},1000);
    });

    $gnb.on("mouseenter",openSub);
    $gnb.on("mouseleave",closeSub);

    $gnb_li_a.on("focusin",openSub);

    //마지막 메뉴 포커스시 서브메뉴 close
    $gnb_li.last().find("a").last().on("focusout",closeSub);

    $gnb_li.on("mouseenter focusin",function(){
        $gnb_li.removeClass("on");
        $(this).addClass("on");
    });

    $gnb_li.on("mouseleave focusout",function(){
        $gnb_li.removeClass("on");
    });

    $mGnb.find(">li>a").on("click",function(){
        var isOn = $(this).parent().hasClass("on");
        $mGnb.children("li").removeClass("on");
        $mGnb.find(">li>ul").stop().slideUp(500);

        if(!isOn){
            $(this).parent().addClass("on");
            $(this).parent().children("ul").stop().slideDown(500);
        }
    });

    $mGnbBtn.on("click",function(){
        if(!$(this).hasClass("on")){
            $(this).addClass("on");
            $(".mGnbWrap").addClass("on");
        }else{
            $(this).removeClass("on");
            $(".mGnbWrap").removeClass("on");
        }
    });

    //레이어팝업 닫기
    $("#close-popup").on("click",function(){
        //오늘하루 그만보기가 체크되어있다면 setCookie 함수를
        //이용하여 쿠키 하루 생성
        if($("#ck").is(":checked")){
            setCookie("today","done",1);
        }
        $("#popup").hide();
    });

    //gnb 2depth 높이
    function getSubMaxHeight(){
        $gnb_li.each(function(index,obj){
            ht_gnb_max = Math.max(ht_gnb_max,$(this).children("ul").height());
        });   
    }

    //gnb 2depth 열기
    function openSub(){
        var isGnbBg = $("#gnb>ul .gnb_bg").length;

        if(!isGnbBg){
            $("#gnb>ul").prepend(
                $("<div class='gnb_bg'>").css({
                    "width":"3000px", "height":ht_gnb_max+50,"margin-left":"-1500px" ,"background-color":"#111","position":"absolute","top":ht_gnb_1depth,"left":"0px","display":"none"
                })
            );
        }

        if(isCloseSub){
            isCloseSub = false;
            $gnb_li_ul.stop().slideDown(gnbSpeed);
            $("#gnb>ul .gnb_bg").stop().slideDown(gnbSpeed);
        }
    }

    //gnb 2depth 닫기
    function closeSub(){
        if(!isCloseSub){
            $gnb_li_ul.stop().slideUp(gnbSpeed-200);
            $("#gnb>ul .gnb_bg").stop().slideUp(gnbSpeed-200,function(){
                $(this).remove();
                isCloseSub = true;
            });
        }
    }

     //로그인 유효성검사
     function checkForm(){
        var id = $("#userId").val().trim();
        var pass = $("#password").val().trim();

        if(id == ""){
            alert("아이디를 입력해주세요.");
            return false;
        }else if(pass == ""){
            alert("비밀번호를 입력해주세요.");
            return false;
        }else{
            location.reload();
        }     
    }

    //로그인폼 생성
    function createLoginForm(){
        if(isLoginPopup){
            $("body")
            .prepend(
                $("<div id='loginPopup'>")
                    .append(
                        $("<div class='loginBox'>")
                            .append(
                                $("<h1>").text("LOGIN"),
                                $("<form action='/' method='post'>")
                                    .append(
                                        $("<legend class='hidden'>").text("로그인"),
                                        $("<input type='text'>").attr({"id":"userId","name":"userId","placeholder":"Username"}),
                                        $("<input type='password'>").attr({"id":"password","name":"password","placeholder":"Password"}),
                                        $("<input type='button'>").attr({"onClick":"chechForm();"}).val("LOGIN")
                                    ),
                                $("<a class='close'>").attr("href","#")
                        )
                    )
            )
            $("#loginPopup").fadeIn(popupSpeed);
            $("#loginPopup .loginBox").fadeIn(popupSpeed);

            isLoginPopup = false;
        }
    }

    //convenient h1 모션실행
    function startConvEvent(){
        slidingTxt({
            "selector":$("#convenient .wrap>h1>span").eq(0),
            "speed":500,
            "delay":100
        });
    
        slidingTxt({
            "selector":$("#convenient .wrap>h1>span").eq(1),
            "speed":500,
            "delay":400
        });
    
        slidingTxt({
            "selector":$("#convenient .wrap>h1>span").eq(2),
            "speed":500,
            "delay":900
        });
    }

     // convenient h1 텍스트 슬라이드 함수
     function slidingTxt(options){
        $(options.selector)
            .append(
                $("<div class='mask'>")
                    .css({
                        "width":"100%",
                        "height":"100%",
                        "position":"absolute",
                        "top":"0px",
                        "left":"-100%",
                        "background-color":"#222"
                    })
            );

        $(options.selector).find(".mask").stop().delay(options.delay).animate({"left":"0%"},options.speed,"easeInExpo",function(){
            $(this).prev().css("opacity","1");
            $(this).stop().animate({"left":"100%"},options.speed,"easeInExpo",function(){
                $(this).remove();
            })
        });
    }

     //레이어팝업 쿠키설정
    function setCookie(name, value, expiredays){
        //현재시간에 쿠키 유지기간인 하루를 추가한뒤  
        //GMT를 이용한 문자열로 변환한 날짜를 가져옴
        var today = new Date();
        var duedate = today.getDate() + expiredays;
        today.setDate(duedate);
        var result = today.toGMTString();

        //하루를 지정한 result값을 이용하여 쿠키생성
        document.cookie = name + "=" + value + "; path=/; expires=" + result + ";";
    }
})