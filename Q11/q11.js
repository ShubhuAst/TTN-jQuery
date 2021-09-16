$(document).ready(function(){
    $("#test").click(function(e){
        e.preventDefault();
        $("#apply").after("<p>Applied!</p>");
    });
});