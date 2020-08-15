$(document).ready(function(){
    var $pgBtn = $("#community .paging .numbers a");

    $pgBtn.on("click",function(e){
        e.preventDefault();
        $pgBtn.removeClass("on");
        $(this).addClass("on");
    });
})
$(document).ready(function(){
    
    $("#quick").on("click",function(){
        $("html,body").animate({scrollTop:0},500);
    });
})
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
$(document).ready(function(){
    var $scroll = $("#introduction .myScroll");
    var $tourImgLi = $("#introduction .intro-tour .img-box>ul>li");
    var $tourTxtLi = $("#introduction .intro-tour .txt-box>ul>li");
    var $introHeader = $("#introduction .intro-header .inner>h2");
    var $locTitle = $("#introduction .intro-location .inner>h1");
    var $tourTitle = $("#introduction .intro-tour .inner>h1");

    var tourTopWid = 170;
    var tourRhtHt = 410;
    var tourBtmWid = 440;
    var mapMarkWid = 200;
    var mapMarkHt = 140;
    var prevIndex = '';
    var isLocTitle = true;
    var isTourMask = true;
    var isNext = true;
    var isPrev = true;
    var isBtnClick = true;
    var lineSpeed = 200;

    introInit();
    setSize();

    $("#introduction .intro-cont .img-box .arrow .prev").on("click",function(e){
        e.preventDefault();

        $("#introduction .intro-cont .img-box>ul").stop().animate({"margin-left":"0%"},400,function(){
            $(this).children("li").last().prependTo($(this));
            $(this).css("margin-left","-100%");
        });
    });

    $("#introduction .intro-cont .img-box .arrow .next").on("click",function(e){
        e.preventDefault();

        $("#introduction .intro-cont .img-box>ul").stop().animate({"margin-left":"-200%"},400,function(){
            $(this).children("li").first().appendTo($(this));
            $(this).css("margin-left","-100%");
        });
    });

    $("#introduction .intro-location .accordian li>a").on("mousedown",function(e){
        e.preventDefault();
        var $li = $(this).parent();
        if($li.hasClass("on")){
            $li.removeClass("on");
            $li.find(".acc-cont").slideUp(500);
        }else{
            $li.addClass("on");
            $li.find(".acc-cont").slideDown(500);
        }
    });

    $("#introduction .intro-location .accordian li>a").on("focusin",function(e){
        e.preventDefault();
        var $li = $(this).parent();
        if(!$li.hasClass("on")){
            $li.addClass("on");
            $li.find(".acc-cont").slideDown(500);
        }
    });

    $("#introduction .intro-tour .controls .prev").on("click",function(e){
        e.preventDefault();
        var index;

        if(isBtnClick){
            isBtnClick = false;
            if(isPrev){
                isPrev = false;
                removeLine(lineSpeed);

                $("#introduction .intro-tour .controls a").removeClass("on");
                $(this).addClass("on");
        
                prevIndex = $("#introduction .intro-tour .img-box>ul>li.on").index();
        
                index = prevIndex;
                if(prevIndex == 0){
                    index = 4;
                }
        
                setTimeout(function(){
                    $tourImgLi.removeClass("on");
                    $tourTxtLi.removeClass("on");
        
                    $("#introduction .intro-tour .img-box>ul>li").eq(index-1).addClass("on");
                    $("#introduction .intro-tour .txt-box>ul>li").eq(index-1).addClass("on");
                },600);
        
                setTimeout(function(){
                    drawLine(lineSpeed,0);
                },1600);
            }
        }
    });

    $("#introduction .intro-tour .controls .next").on("click",function(e){
        e.preventDefault();
        var index;

        if(isBtnClick){
            isBtnClick = false;
            if(isNext){
                isNext = false;
                removeLine(lineSpeed);
        
                $("#introduction .intro-tour .controls a").removeClass("on");
                $(this).addClass("on");
        
                prevIndex = $("#introduction .intro-tour .img-box>ul>li.on").index();
        
                index = prevIndex;
                if(prevIndex == 3){
                    index = -1;
                }
                console.log("1번");
                setTimeout(function(){
                    $tourImgLi.removeClass("on");
                    $tourTxtLi.removeClass("on");
        
                    $("#introduction .intro-tour .img-box>ul>li").eq(index+1).addClass("on");
                    $("#introduction .intro-tour .txt-box>ul>li").eq(index+1).addClass("on");
                },600);
        
                setTimeout(function(){
                    drawLine(lineSpeed,1);
                },1600);
            }
        }
    });

    var section1 = $("#introduction .intro-cont").offset().top;
    var section2 = $("#introduction .intro-location").offset().top;
    var section3 = $("#introduction .intro-tour").offset().top;
    var base = 300;
    
    // 스크롤 이벤트
    $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();

        $scroll.removeClass("on");

        if(scroll >= section1-base && scroll < section2-base){
            $scroll.removeClass("on");
            $("#introduction .intro-cont").addClass("on");
        }
        if(scroll >= section2-base && scroll < section3-base){
            $scroll.removeClass("on");
            $("#introduction .intro-location").addClass("on");

            if(isLocTitle){
                isLocTitle = false;
                typingTitle($locTitle,0.5);
            }
        }
        if(scroll >= section3-base){
            $scroll.removeClass("on");
            $("#introduction .intro-tour").addClass("on");

            if(isTourMask){
                isTourMask = false;
                typingTitle($tourTitle,0.5);
            }
        }
    });

    $(window).on("resize", setSize);
    
    /* 카카오맵 */
    var mapContainer = document.getElementById('map');
    var mapOption = { 
        center: new kakao.maps.LatLng(37.5117914, 127.0572365),
        level: 4 
    };
    var map = new kakao.maps.Map(mapContainer, mapOption); 

    var markerOptions = [
        {
            title: '1호점',
            latlng: new kakao.maps.LatLng(37.5117979,127.0571645),
            imgSrc : '../../img/sub/introduction/img/mark.png',
            imgSize : new kakao.maps.Size(mapMarkWid,mapMarkHt),
            imgPos : {offset: new kakao.maps.Point(123, 54)},
            iwContent : "<div id='inW'><h1>주변관광지</h1>"
                            + "<ul>" 
                            + "<li>서울선릉과정릉</li>"
                            + "<li>코엑스</li>"
                            + "<li>봉은사</li>"
                            + "</ul></div>"
        },
        {
            title: '2호점',
            latlng: new kakao.maps.LatLng(37.5052896,126.7498367),
            imgSrc : '../../img/sub/introduction/img/mark.png',
            imgSize : new kakao.maps.Size(mapMarkWid,mapMarkHt),
            imgPos : {offset: new kakao.maps.Point(123, 54)},
            iwContent : "<div id='inW'><h1>주변관광지</h1>"
                            + "<ul>" 
                            + "<li>상동호수공원</li>"
                            + "<li>부천영상문화단지</li>"
                            + "<li>부천체육관</li>"
                            + "</ul></div>"
        },
        {
            title: '3호점',
            latlng: new kakao.maps.LatLng(37.4976637,127.0258943),
            imgSrc : '../../img/sub/introduction/img/mark.png',
            imgSize : new kakao.maps.Size(mapMarkWid,mapMarkHt),
            imgPos : {offset: new kakao.maps.Point(123, 54)},
            iwContent : "<div id='inW'><h1>주변관광지</h1>"
                            + "<ul>" 
                            + "<li>역삼문화공원</li>"
                            + "<li>서리풀공원</li>"
                            + "</ul></div>"
        }
    ];
    
    for (var i = 0; i < markerOptions.length; i ++) {
        // 마커 이미지 생성
        var markerImage = new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize); 
        
        // 마커 생성
        var marker = new kakao.maps.Marker({
            map: map, // 마커 표시할 지도
            position: markerOptions[i].latlng, // 마커 표시할 위치
            title : markerOptions[i].title, // 마커 타이틀, 마커 hover시 타이틀 표시
            image : markerImage // 마커 이미지 
        });

        var infowindow = new kakao.maps.InfoWindow({
            content : markerOptions[i].iwContent,
        });

        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
    
    $(".branch li").children("a").on("click focusin",function(e){
        e.preventDefault();
        var index = $(this).parent().index();
        moveTo(markerOptions[index].latlng);
    });

    function introInit(){
        $introHeader.lettering();
        $locTitle.lettering();
        $tourTitle.lettering();

        setTimeout(function(){
            typingTitle($introHeader,0.5);
        },800);
    
        $("#introduction .intro-header .inner>p>span").eq(0).animate({"bottom":"0px","opacity":"1"},300,function(){
            $("#introduction .intro-header .inner>p>span").eq(1).animate({"bottom":"0px","opacity":"1"},300);
        });
    
        $("#introduction .intro-cont .img-box li").last().prependTo("#introduction .intro-cont .img-box ul");

        $("#introduction .intro-cont .txt-box ul li").each(function(index,obj){
            $(this).css({"transition-delay":0.2 * index + 's'});
        });
    }

    // 각 파트 제목 애니메이션
    function typingTitle(obj,speed) {
        var title = new TimelineMax();
        title.staggerFromTo(obj.children("span"), speed, 
        {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -30},
        {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    }

    // 카카오맵 infowindow 열기
    function makeOverListener(map, marker, infowindow) {
        return function() {
            infowindow.open(map, marker);
        };
    }

    // 카카오맵 infowindow 닫기
    function makeOutListener(infowindow) {
        return function() {
            infowindow.close();
        };
    }

    // 카카오맵 지도 이동
    function moveTo(target){
        var moveLatLan = target;
        map.setCenter(moveLatLan);
        return false;
    }

    // 주변관광지 이미지 테두리 생성
    function drawLine(speed,btnType){
        $("#introduction .intro-tour .txt-box .lines .b-top").animate({"width":tourTopWid + "px"},speed,function(){
            $("#introduction .intro-tour .txt-box .lines .b-right").animate({"height":tourRhtHt + "px"},speed,function(){
                $("#introduction .intro-tour .txt-box .lines .b-bottom").animate({"width":tourBtmWid + "px"},speed,function(){
                    isBtnClick = true;
                    if(btnType > 0){
                        isNext = true;
                    }else{
                        isPrev = true;
                    }
                });
            });
        });
    }

    // 주변관광지 이미지 테두리 삭제
    function removeLine(speed){
        $("#introduction .intro-tour .txt-box .lines .b-bottom").animate({"width":"0px"},speed,function(){
            $("#introduction .intro-tour .txt-box .lines .b-right").animate({"height":"0px"},speed,function(){
                $("#introduction .intro-tour .txt-box .lines .b-top").animate({"width":"0px"},speed);
            });
        });
    }

    // 브라우저 크기에 따른 사이즈조절
    function setSize(){
        var wid = $(window).width();

        //web 
        if(wid >= 1180){
            tourTopWid = 170;
            tourRhtHt = 410;
            tourBtmWid = 440;
            mapMarkWid = 200;
            mapMarkHt = 140;
        }

        //tablet1
        if(wid >= 800 && wid < 1180){
            tourTopWid = 170;
            tourRhtHt = 369;
            tourBtmWid = 440;
            mapMarkWid = 160;
            mapMarkHt = 110;
        }

        //tablet2
        if(wid >= 540 && wid < 800){
            tourTopWid = 250;
            tourRhtHt = 290;
            tourBtmWid = 460;
            mapMarkWid = 130;
            mapMarkHt = 90;
        }

        //mobile1
        if(wid < 540){
            tourTopWid = 170;
            tourRhtHt = 270;
            tourBtmWid = 300;
            mapMarkWid = 110;
            mapMarkHt = 80;
        }

        $("#introduction .intro-tour .txt-box .lines .b-top").css("width",tourTopWid);
        $("#introduction .intro-tour .txt-box .lines .b-right").css("height",tourRhtHt);
        $("#introduction .intro-tour .txt-box .lines .b-bottom").css("width",tourBtmWid);
    }
})
$(document).ready(function(){
    var $nextBtn = $("#members1 .next");

    $nextBtn.on("click",function(e){
        e.preventDefault();
        var chkCnt = $(".agr-wrap input[type='checkbox']").length;
        var i = 0;
        $(".agr-wrap input[type='checkbox']").each(function(index,obj){
            if(!$(this).is(":checked")){
                alert("약관동의를 체크해주세요");
                $(this).focus();
                return false;
            }else{
                i++;
            }

            if(i == chkCnt){
                location.href="../members2/members2.html";
            }
        });
    });
})
$(document).ready(function(){
    var $nextBtn = $("#members2 .next");

    $nextBtn.on("click",function(e){
        location.href="../members3/members3.html";
    });
})
$(document).ready(function(){
    var $nextBtn = $("#members3 .next");
    
    $nextBtn.on("click",function(e){
        e.preventDefault();
        var $required = $("#members3 #joinForm .required");
        var $emailSelect = $("#members3 #joinForm #email_list");
        var $pwd = $("#members3 #joinForm #pwd");
        var $pwd2 = $("#members3 #joinForm #pwd2");
        var isGenderChk = $("#members3 #joinForm input[name='gender']").is(":checked");
        var isColorChk = $("#members3 #joinForm input[name='favColor']").is(":checked");
        var isRequiredOk = false;
        var isPwdOk = false;
        var isGenderOk = false;
        var isColorOk = false;
        var $redData = [];

        alert("이것도");
        $("#members3 #joinForm input").removeClass("red");
        $redData.length = 0;
        console.log("오잉오잉");
        $emailSelect.on("change",function(){
            if($(this).val() == 1) {
                console.log("직접입력");
            }
        });

        $required.each(function(index,obj){
            if($(this).val().length == 0){
                $redData.push($(this));
            }
        });

        if($redData.length > 0){
            for(var i=0; i<$redData.length; i++){
                $redData[i].addClass("red");
            }
            alert("필수정보를 입력해주세요.");
            $('html, body').animate({
                scrollTop: $('#members3 #joinForm').offset().top
                }, '0');

            return false;
        }else{
            isRequiredOk = true;
        }

        if($pwd.val() != $pwd2.val()){
            alert("비밀번호를 동일하게 입력하세요.");
            $pwd.addClass("red");
            $pwd2.addClass("red");
            $pwd.focus();
            return false;
        }else{
            isPwdOk = true;
        }

        if(!isGenderChk){
            alert("성별을 체크해주세요.");
            return false;
        }else{
            isGenderOk = true;
        }

        if(!isColorChk){
            alert("선호색상을 선택해주세요.");
            return false;
        }else{
            isColorOk = true;
        }

        if(isRequiredOk && isPwdOk && isGenderOk && isColorOk){
            alert("회원가입이 완료되었습니다.");
            location.href = "../members4/members4.html";
        }
    });
})
$(document).ready(function(){
    var $cancelBtn = $(".mem-com .cancel");

    $('html, body').animate({
        scrollTop: $('.mem-com .inner > h1').offset().top
        }, '0');

    $cancelBtn.on("click",function(e){
        e.preventDefault();
        var isCancel = confirm("회원가입을 취소하시겠습니까?");
        if(isCancel){
            location.href="index.html";
        }
    });
        
})
$(document).ready(function(){
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
    var key = 'AIzaSyB365rJzdr_T4ucekYpYuMKAZvnTPN8cKY';
    var playlistId = 'PLyN7g4FRfj20NLRVEeB5rzuIxaqcI0klz';
    var options = {
        part: 'snippet',
        key: key,
        maxResults: 10,
        playlistId: playlistId
    };
    var scrollBase = 700;
    var popSpeed = 300;
    var posArr = [];
    var $body = $("body");

    loadYoutube();

    $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();

        $(posArr).each(function(index,obj){
            if(scroll >= posArr[index] - scrollBase){
                $("#list").children("li").eq(index).css({"transform":"translateY(0px)","opacity":"1"});
            }
        });
    });

    $body.on("click","#list .pic",function(){
        var vidId = $(this).parent().data("vid");
        createPop(vidId);
    });
    
    $body.on("click",".pop .close",removePop);


    //youtube 데이터 호출
    function loadYoutube(){
        $.ajax({
            url : URL,
            dataType : "jsonp",
            data : options,
            success : function(data){
                createList(data);
            },
            error : function(){
                alert("유튜브 동영상 조회 실패");
            }
        });
    }

    //동영상 레이아웃 팝업 생성
    function createPop(vidId){
        $body
            .append(
                $("<aside class='pop'>")
                    .css({
                        "width":"90%",
                        "height":"90%",
                        "position":"fixed",
                        "top":"50%",
                        "left":"50%",
                        "transform":"translate(-50%,-50%)",
                        "background":"rgba(0,0,0,0.9)",
                        "padding":"60px 50px 50px 50px",
                        "box-sizing":"border-box",
                        "z-index":"10",
                        "box-shadow":"15px 15px 20px rgba(0,0,0,0.5)",
                        "display":"none"
                    })
                    .append(
                        $("<iframe>")
                            .attr({
                                "width":"100%",
                                "height":"100%",
                                "src":"https://www.youtube.com/embed/" + vidId,
                                "frameborder":"0",
                                "allowfullscreen":"true"
                            })
                    )
                    .append(
                        $("<a class='close' role='button'>").attr("href","javascript:;")
                            .css({
                                "width":"30px",
                                "height":"30px",
                                "position":"absolute",
                                "top":"20px",
                                "right":"20px"
                            })
                            .append(
                                $("<i class='fas fa-times'>")
                                    .css({
                                        "font-size":"23px",
                                        "color":"#eee",
                                        "position":"absolute",
                                        "top":"50%",
                                        "left":"50%",
                                        "transform":"translate(-50%,-50%)"
                                    })
                            )
                    )
            )
            $(".pop").slideDown(popSpeed);
    }

    //넘어온 유튜브 데이터로 동영상 목록 생성
    function createList(data){
        $(data.items).each(function(index,item){
            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description;
            var descLength = desc.length;
            var vidId = item.snippet.resourceId.videoId;
            var date = item.snippet.publishedAt.substring(0,10);

            if(descLength > 140){
                desc = desc.substring(0,140) + "...";
            }

            $("#list")
                .append(
                    $("<li>").attr("data-vid",vidId)
                        .append(
                            $("<a href='javascript:;' class='pic' role='button'>").css("background-image","url(" + thumb + ")"),
                            $("<div class='desc'>")
                                .append(
                                    $("<h2>").text(title),
                                    $("<p>").text(desc),
                                    $("<span>").text(date)
                                )
                        )
                )
        });

        $("#list li").each(function(index,obj){
            posArr.push($(obj).offset().top);
        });
    }

    //유튜브 팝업창 닫기(삭제)
    function removePop(){
        $(".pop").slideUp(popSpeed,function(){
            $(".pop").remove();
        });
    }

})




