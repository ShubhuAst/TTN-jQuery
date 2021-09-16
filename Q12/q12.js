$(document).ready(function(){
    $("div").click(function(){
        alert("This should not pop-up on clicking li element");
    }).children().on("click",function(e){
        e.stopPropagation();
    });

});