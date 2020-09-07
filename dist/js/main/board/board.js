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