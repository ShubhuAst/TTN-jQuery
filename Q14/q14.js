$(document).ready(function(){
    $("#test").click(function(){
        $(this).after("<p>Applied!!</p>");

        $("table td.nos").filter(function(){
            return parseFloat($(this).text()) > 10;
        }).css("background-color","yellow");
    });
});