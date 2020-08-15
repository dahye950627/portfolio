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