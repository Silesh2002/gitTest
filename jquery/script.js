$(document).ready(function() {
    $("h1").css("color","blue");
});

 $("h1").addClass("big-title")

 $("h1").click(function(){
    $("h1").css("color","yellow")
 })


    $("button").click(function(){
        $("h1").css("color","purple");
    });

    $(document).keypress(function(e){
        $("h1").text(e.key);
    });
 
