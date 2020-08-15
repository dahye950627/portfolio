$(document).ready(function(){
    var $visualBtns = $("#visual .visual-btns a");
    var visualSpeed = 600;
    var topLineWid = 83;
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