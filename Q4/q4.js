$(document).ready(function(){
    $("#disable").toggle();

    $("#test").click(function(){
        $(this).prop("disabled",true);
        $("#disable").toggle();
    });
});