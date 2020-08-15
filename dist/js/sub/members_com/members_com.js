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