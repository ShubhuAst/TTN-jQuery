$(document).ready(function(){
    $("table").on("click",".delete",function(){
        var cell = $(this)
        $.ajax({
            type: "GET",
            url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=D7B6E8EC-B95C-4F08-9A86-E0451401BC13",
            success: function(data,status){
                
                $(cell).closest("tr").remove();

            }
        });

    });
});