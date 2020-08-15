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




