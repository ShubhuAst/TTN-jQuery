$(document).ready(function(){
    let arrImg = ["KVS.jpeg","code.jpeg","NIET.jpeg","TTN.jpeg"];

    $("#test").click(function(){
        $(this).after("<div class='startSlides'>Click Here!</div>");
    });

    $(document).on("click",".startSlides",function(){

        $(this).empty()
        $(this).append("<img scr='' class='slideShow'></img>");

        $.each(arrImg , function(index, val) { 
            setTimeout(function(){
                console.log(val);
                $(".slideShow").attr("src",val);
            },500*index);
          });
    });
});
