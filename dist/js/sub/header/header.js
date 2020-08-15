$(document).ready(function(){
    var $util = $("#sub_header .util");
    var $mUtil = $("#sub_header .mGnbWrap .mUtil");
    var $gnb = $("#gnb");
    var $mGnb = $("#mGnb");
    var $mGnbBtn = $(".btn-gnb");
    var $gnb_li = $("#gnb>li");
    var $gnb_li_a = $("#gnb li a");
    var $gnb_li_ul = $("#gnb li ul");

    var isLoginPopup = true;
    var popupSpeed = 700;
    var ht_gnb_max = 0;
    var ht_gnb_1depth = $gnb_li.outerHeight();
    var gnbSpeed = 500;
    var isCloseSub = true;

    getSubMaxHeight();

    //로그인 팝업창 생성
    $util.children().eq(0).children().on("click",function(e){
        e.preventDefault();
        createLoginForm();
    });

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

    //gnb 2depth 높이
    function getSubMaxHeight(){
        $gnb_li.each(function(index,obj){
            ht_gnb_max = Math.max(ht_gnb_max,$(this).children("ul").height());
        });   
    }

    //gnb 2depth 열기
    function openSub(){
        var isGnbBg = $("#gnb .gnb_bg").length;

        if(!isGnbBg){
            $("#gnb").prepend(
                $("<div class='gnb_bg'>").css({
                    "width":"3000px", "height":ht_gnb_max+50,"margin-left":"-1500px" ,"background-color":"#fff","position":"absolute","top":ht_gnb_1depth,"left":"0px","display":"none","z-index":"70"
                })
            );
        }

        if(isCloseSub){
            isCloseSub = false;
            $gnb_li_ul.stop().slideDown(gnbSpeed);
            $("#gnb .gnb_bg").stop().slideDown(gnbSpeed);
        }
    }

    //gnb 2depth 닫기
    function closeSub(){
        if(!isCloseSub){
            $gnb_li_ul.stop().slideUp(gnbSpeed-200);
            $("#gnb .gnb_bg").stop().slideUp(gnbSpeed-200,function(){
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
})