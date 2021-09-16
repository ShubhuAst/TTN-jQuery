$(document).ready(function(){
    $("#test").click(function(){
        var maxHeight = 0;
        var maxHeightElement = null

        $(".divClass").each(function(){
            var height = $(this).height();

            if(height > maxHeight){
                maxHeight = height;
                maxHeightElement = $(this);
            }
        });
        
        $(maxHeightElement).css("background-color","red");
        alert("Box with red background has max height of: "+maxHeight);
    });

});