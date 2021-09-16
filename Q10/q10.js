$(document).ready(function(){
    $("ul.parent > li").hover(function(){
        $(this).find("ul.child").show();
    },function(){
        $(this).find("ul.child").hide();
    });
});