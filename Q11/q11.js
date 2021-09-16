$(document).ready(function(){
    $("#test").click(function(){
        $("#apply").after("<p>Applied!</p>");
        $("#main").click(function(e){
            e.preventDefault();
        });
    });
});