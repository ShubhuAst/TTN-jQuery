$(document).ready(function(){
    $("#test").click(function(){

        $.ajax({
            type: "GET",
            url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=D7B6E8EC-B95C-4F08-9A86-E0451401BC13",
            success: function(data,status){
                alert("ajax GET call status: "+status+"\nSee Console for API data");
                console.log(data);
            }
        });

        $(this).after("<p> Get Call performed! </p>");
    });
});