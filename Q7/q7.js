$(document).ready(function(){
    $("button").click(function(){
        $(this).after("<button>Click me again!</button>");
    });
});