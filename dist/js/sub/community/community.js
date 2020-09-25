$(document).ready(function(){
    var $pgBtn = $("#community .paging .numbers a");

    loadData();

    $pgBtn.on("click",function(e){
        e.preventDefault();
        $pgBtn.removeClass("on");
        $(this).addClass("on");
    });

    //자유게시판 데이터 출력
    function loadData(){
        $.ajax({
            url : "../../data/sub/community/data/list.json",
            dataType : "json",
            success : function(data) {
                var jsonData = data.list;
                console.log(data.list);
                //가져온 데이터를 tbody에 한줄씩 추가
                for(var i=0; i<jsonData.length; i++){
                    $("#community table tbody")
                        .append(
                            $("<tr>")
                            .append(
                                $("<td>").text(i+1),
                                $("<td>").append(
                                    $("<a href='javascript:;''>").text(jsonData[i].title),
                                ),
                                $("<td>").text(jsonData[i].writer),
                                $("<td>").text(jsonData[i].date),
                                $("<td>").text(jsonData[i].count)
                            )
                        );
                }
            },
            error : function(){
                alert("게시판의 데이터를 불러오지 못했습니다.");
                $("#community table tbody")
                        .append(
                            $("<tr>")
                            .append(
                                $("<td>").text(""),
                                $("<td>").text("게시판의 데이터를 불러오지 못했습니다."),
                                $("<td>").text(""),
                                $("<td>").text(""),
                                $("<td>").text("")
                            )
                        );
            }
        });
    }
})
