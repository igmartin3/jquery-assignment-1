// Do your work in this file.


//var viewDiv = document.createElement("div");
//viewDiv.className = "view";

var viewDiv = $("<div class='view'></div>").appendTo("body");

//$( viewDiv ).appendTo(document.body);

//var grassDiv = document.createElement("div");
//grassDiv.className = "grass";

//$( grassDiv ).appendTo( $(viewDiv) );


var grassDiv = $("<div class='grass'></div>").appendTo(viewDiv);

//var sunDiv = document.createElement("div");
//sunDiv.className = "sun";

//$(sunDiv).appendTo($(viewDiv));

var sunDiv = $("<div class='sun'></div>").appendTo(viewDiv);

var i = 5;
while (i > 0) {
    //var rayDiv = document.createElement("div");
    //rayDiv.className = "ray-"+i;

    //$(rayDiv).appendTo($(sunDiv));

    var rayDiv = $("<div></div>").appendTo(sunDiv);
    rayDiv.addClass("ray-"+i);
    i--;
}

//var mountainDiv = document.createElement("div");
//mountainDiv.className = "mountain";

//$(mountainDiv).appendTo($(viewDiv));

var mountainDiv = $("<div class='mountain'></div>").appendTo(viewDiv);


//var mountainTopDiv = document.createElement("div");
//mountainTopDiv.className = "mountain-top";

//$(mountainTopDiv).appendTo($(mountainDiv));

var mountainTopDiv = $("<div class='mountain-top'></div>").appendTo(mountainDiv);

var x = 1;

do {
    //var mountainCapDiv = document.createElement("div");
    //mountainCapDiv.className = "mountain-cap-"+x;

    //$(mountainCapDiv).appendTo($(mountainTopDiv));

    var mountainCapDiv = $("<div></div>").appendTo(mountainTopDiv);
    mountainCapDiv.addClass("mountain-cap-"+x);
    x++;

} while (x < 4);


