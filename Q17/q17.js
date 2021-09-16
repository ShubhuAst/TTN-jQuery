$(document).ready(function(){
    $("#test").click(function(){
        let arrImg = ["KVS.jpeg","code.jpeg","NIET.jpeg","TTN.jpeg"];

        $(this).after("<div id='slideshow'></div>");
    });

    $(document).on("click","#slideshow",function(){
        for(var i = 0; i < arrImg.length; i++){
            $(this).append(function(){
                return "<img src='"+arrImg[i]+"' width='100' height='100'>"
            });
            setTimeout(function(){},500);
        }
    });
});