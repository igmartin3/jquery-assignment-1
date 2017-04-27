// Do your work in this file.
for (i = 1; i < 197; i++) {
    var boxDiv = document.createElement("div");
    boxDiv.className = "box";

    //var type1Div = document.createElement("div");
    //var type2Div = document.createElement("div");

    if ((i % 2) == 0) {
        $(boxDiv).addClass("type-1");
    } else {
        $(boxDiv).addClass("type-2");
    }

    $(boxDiv).appendTo($(document.body));
}


$(".box").click(function() {
    if ( $(this).hasClass("clicked")){
        $(this).removeClass("clicked");
    } else {
         $(this).addClass("clicked");
    }
});