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