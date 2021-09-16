$(document).ready(function(){
    $("select").on("change",function(){
        $("div").append(" "+this.value+" ");
    });
});