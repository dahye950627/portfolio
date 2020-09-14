$(document).ready(function(){
    
})
$(document).ready(function(){
    var $boardTab = $("#board .board-post dl dt a");
    var $boardList = $("#board .board-post dl");

    loadBoardData();

    $boardTab.on("click focus",function(e){
        e.preventDefault();
        var target = $(this).attr("href");
        var isActive = $(this).hasClass("on");

        if(!isActive){
            $boardTab.removeClass("on");
            $(this).addClass("on");

            $boardList.children("dd").removeClass("on");
            $(target).addClass("on");
        }
    });

    //게시판 데이터 호출
    //tab이 추가되어도 코드수정이 없도록 구현
    function loadBoardData(){
        var tabCount = $("#board .board-post dl").length;
        var tabMenu = [];

        for(var i=0; i<tabCount; i++){
            var menu = $("#board .board-post dl").eq(i).find("a").data("tab");
            tabMenu.push(menu);
        }

        $.ajax({
            url : "data/main/board/data/board.json",
            dataType : "json",
            success : function(data){
                for(var i=0; i<tabCount; i++){
                    var jsonData = data[tabMenu[i]];
                    for(var j=0; j<jsonData.length; j++){
                        $("#board .board-post dl").eq(i).children("dd")
                        .append(
                            $("<li>")
                                .append(
                                    $("<a>").attr("href","javascript:;").text(jsonData[j].content),
                                    $("<span>").text(jsonData[j].date)
                                )
                        )
                    }
                }
            },
            error : function(){
                for(var i=0; i<tabCount; i++){
                    $("#board .board-post dl").eq(i).children("dd")
                    .append(
                        $("<li>")
                            .append(
                                $("<a>").attr("href","javascript:;").text("데이터를 불러오지 못했습니다.").css("cursor","text")
                            )
                    )
                }
            }
        });
    }
})
$(document).ready(function(){
    
    $("#quick").on("click",function(){
        $("html,body").animate({scrollTop:0},500);
    });
})
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
        $("#loginPopup .loginBox").fadeOut(popupSpeed);
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
        var today = new Date();
        var duedate = today.getDate() + expiredays;
        today.setDate(duedate);
        var result = today.toGMTString();

        document.cookie = name + "=" + value + "; path=/; expires=" + result + ";";
    }
})
$(document).ready(function(){
    var $roomsCon1Btn = $("#rooms .content1 a");
    var $roomsCon2Btn = $("#rooms .content2 .close");
    var $roomsSubBtn = $("#rooms .content2 input[type='submit']");
    var _rooms_con1 = {
        enter_props : {"transitionDelay":"0.5s"},
        leave_props : {"transitionDelay":"0s"}
    };

    //article transition-delay 설정
    $("#rooms article").each(function(index,obj){
        $(this).css({
            "transition-delay" : (0.3 * index) + "s"
        });
    });

    //예약버튼 클릭시 이벤트
    $roomsSubBtn.on("click",function(){
        alert("로그인을 해주세요.");
        return false;
    });

    $roomsCon1Btn.on("mouseenter",function(e){
        $(this).find("i").css(_rooms_con1.enter_props);
    });

    $roomsCon1Btn.on("mouseleave",function(e){
        $(this).find("i").css(_rooms_con1.leave_props);
    });

    $roomsCon1Btn.on("click",function(e){
        $(this).parents(".content1").removeClass("on");
        $(this).parents(".content1").siblings().addClass("on");
    });

    $roomsCon2Btn.on("click",function(e){
        $(this).parents(".content2").removeClass("on");
        $(this).parents(".content2").siblings().addClass("on");
    });

})
$(document).ready(function(){
    var $slidesPic = $("#slides .pic");
    var $listBox = $("#slides .list-box");
    var $listUl = $("#slides #list");
    var _slides_svg = {
        enter_props : {"transition":"stroke-dashoffset 0.7s 0.5s, fill 0.5s 0s"},
        leave_props : {"transition":"stroke-dashoffset 0.7s 0s, fill 0.5s 0.7s"}
    };
    var liWid = $("#slides #list li").outerWidth(true);
    var liCnt = $("#slides #list li").length;
    var totalWid = liWid * liCnt;
    var mLeft = -50;

    //ul크기 li에 맞게 변경
    $("#slides #list").width(totalWid);

    var sliding = setInterval(move,30);

    $slidesPic.on("mouseenter",function(e){
        $(this).find("path").css(_slides_svg.enter_props);
    });
    
    $slidesPic.on("mouseleave",function(e){
        $(this).find("path").css(_slides_svg.leave_props);
    }); 

    $listBox.on("mouseenter",function(){
        clearInterval(sliding);
    });

    $listBox.on("mouseleave",function(){
        sliding = setInterval(move,20);
    });

    //이미지 이동
    function move(){
        mLeft -= 2;
        
        if(mLeft < -liWid){
            $("#slides #list li").first().appendTo("#slides #list");
            mLeft = 0;
        }
        $listUl.css("left",mLeft);
    }
    
})
$(document).ready(function(){
    var $visualBtns = $("#visual .visual-btns a");
    var visualSpeed = 600;
    var isChange = false;
    var isTyping = false;
    var typingIdx = 0;
    var typingTxtArr = ["Luxury Hotel Marian","Having Good Amenities","Delicious Food Served"];
    var tyInt;

    initH1();
    initVisual();

    $visualBtns.on("click",function(e){
        var index = $(this).parent().index();
        changeVisual(index,$(this));
    });

    //비주얼 첫화면 설정
    function initVisual(){
        $("#visual .text-box .text").eq(0).addClass("on");
        changeTxt(0);
        drawLine();
    }

    //비주얼 변경
    function changeVisual(index,obj){
        if(isChange){
            isChange = false;
            var isActive = obj.parent().hasClass("on");

            if(!isActive){
                changeBtn(index);
                changeTxt(index);
                changePic(index);
                drawLine();
            }
        }
    }

    //text-box border 모션
    function drawLine(){
        $("#visual .text-box .top").css("width","0%");
        $("#visual .text-box .left").css("height","0%");
        $("#visual .text-box .bottom").css("width","0%");

        $("#visual .text-box .top").stop().animate({"width":"83%"},visualSpeed,function(){
            $("#visual .text-box .left").stop().animate({"height":"100%"},visualSpeed+100,function(){
                $("#visual .text-box .bottom").stop().animate({"width":"50%"},visualSpeed+200,function(){
                    isChange = true;
                });
            });
        });
    }

    //visual 아래 버튼 변경
    function changeBtn(index){
        $("#visual .visual-btns li").removeClass("on");
        $("#visual .visual-btns li").eq(index).addClass("on");
    }

    //visual 가운데 텍스트박스 변경
    function changeTxt(index){
        $("#visual .text-box .text").children("h1").removeClass("on")
        $("#visual .text-box .text").children("p").removeClass("on")
        $("#visual .text-box .text").eq(index).children("h1").addClass("on");
        $("#visual .text-box .text").children("h1").text("");

        if(!isTyping){
            isTyping = true;
            tyInt = setInterval(function(){
                typing(index,typingTxtArr[index]);
            },100);
        }
       
    }
    
    //visual 오른쪽 이미지 변경
    function changePic(index){
        $("#visual .img-group .pic").removeClass("on");
        $("#visual .img-group .pic").eq(index).addClass("on");
    }

    //타이핑 함수
    function typing(index,typingTxt){
        if(typingIdx < typingTxt.length){
            $("#visual .text-box .text").eq(index).children("h1").append(typingTxt[typingIdx]);
            typingIdx ++;
        }else{
            clearInterval(tyInt);
            $("#visual .text-box .text").eq(index).children("p").css({"transition":"1s"});
            $("#visual .text-box .text").eq(index).children("p").addClass("on");
            setInterval(function(){
                $("#visual .text-box .text").eq(index).children("p").css({"transition":"0s"});
            },300);
            typingIdx = 0;
            isTyping = false;
        }
    }

    //h1에 들어갈 내용 split
    function initH1(){
        for(var i=0; i<typingTxtArr.length; i++){
            typingTxtArr[i] = typingTxtArr[i].split("");
        }
    }
    
})