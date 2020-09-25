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

    //지도에 표시할 장소들 정보
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

        //인포윈도우 생성
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