$(document).ready(function(){
    $("#test").click(function(){
        $(this).before("<button id='beforeBtn'>Click me!<button>");
    });

    $("#beforeBtn").click(function(){
        alert("I am Not Working");
    });


    $("#test").click(function(){
        $(this).after("<button id='afterBtn'>No Click me!(Here used .on method)<button>");
    });

    $(document).on("click", "#afterBtn", function(){
        alert("I am Working");
    });
});