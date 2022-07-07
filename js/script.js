$(document).ready(function(){
    $(".intro").click(function(){
        $("html, body").animate({scrollTop : $("#cont_01 article:first-child").offset().top - 80}, 1000);
        $("#open_menu").prop("checked", false);  //prop() : [property : 속성] 내부의 변경할 값을 강제로 넣는다. ◎ -> ○
        return false;
    });
    $(".story").click(function(){
        $("html, body").animate({scrollTop : $("#cont_01 article:last-child").offset().top - 80}, 1000);
        $("#open_menu").prop("checked", false);
        return false;
    });
    $(".journal").click(function(){
        $("html, body").animate({scrollTop : $("#cont_02 article:first-child").offset().top - 80}, 1000);
        $("#open_menu").prop("checked", false);
        return false;
    });
    $(".stores").click(function(){
        $("html, body").animate({scrollTop : $("#cont_02 article:last-child").offset().top - 80}, 1000);
        $("#open_menu").prop("checked", false);
        return false;
    });
});