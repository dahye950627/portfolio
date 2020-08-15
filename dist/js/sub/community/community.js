$(document).ready(function(){
    var $pgBtn = $("#community .paging .numbers a");

    $pgBtn.on("click",function(e){
        e.preventDefault();
        $pgBtn.removeClass("on");
        $(this).addClass("on");
    });
})