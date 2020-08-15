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