$(document).ready(function(){
    var $nextBtn = $("#members3 .next");
    var $emailSelect = $("#members3 #joinForm #email_list");
    var $emailDomain = $("#members3 #joinForm #domain");

    $emailSelect.on("change",function(){
        if($(this).val() == 0) {
            $emailDomain.val("");
            $emailDomain.attr("disabled", false);
            $emailDomain.focus();
        }else {
            var selDomain = $("#members3 #joinForm #email_list option:checked").text();
            $emailDomain.attr("disabled", true);
            $emailDomain.val(selDomain);
        }
    });

    $nextBtn.on("click",function(e){
        e.preventDefault();
        var $required = $("#members3 #joinForm .required");
        var $pwd = $("#members3 #joinForm #pwd");
        var $pwd2 = $("#members3 #joinForm #pwd2");
        var isGenderChk = $("#members3 #joinForm input[name='gender']").is(":checked");
        var isRequiredOk = false;
        var isPwdOk = false;
        var isGenderOk = false;
        var $redData = [];

        $("#members3 #joinForm input").removeClass("red");
        $redData.length = 0;
      
        $required.each(function(index,obj){
            if($(this).val().length == 0){
                $redData.push($(this));
            }
        });

        if($redData.length > 0){
            for(var i=0; i<$redData.length; i++){
                $redData[i].addClass("red");
            }
            alert("필수정보를 입력해주세요.");
            $('html, body').animate({
                scrollTop: $('#members3 #joinForm').offset().top
                }, '0');

            return false;
        }else{
            isRequiredOk = true;
        }

        if($pwd.val() != $pwd2.val()){
            alert("비밀번호를 동일하게 입력하세요.");
            $pwd.addClass("red");
            $pwd2.addClass("red");
            $pwd.focus();
            return false;
        }else{
            isPwdOk = true;
        }

        if(!isGenderChk){
            alert("성별을 체크해주세요.");
            return false;
        }else{
            isGenderOk = true;
        }

        if(isRequiredOk && isPwdOk && isGenderOk){
            alert("회원가입이 완료되었습니다.");
            location.href = "../members4/members4.html";
        }
    });
})