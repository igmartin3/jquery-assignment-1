// Do your work in this file.
var viewDiv = document.createElement("div");
viewDiv.className = "view";

$( viewDiv ).appendTo(document.body);

var grassDiv = document.createElement("div");
grassDiv.className = "grass";

$( grassDiv ).appendTo( $(viewDiv) );

var sunDiv = document.createElement("div");
sunDiv.className = "sun";

$(sunDiv).appendTo($(viewDiv));

var i = 5;
while (i > 0) {
    var rayDiv = document.createElement("div");
    rayDiv.className = "ray-"+i;

    $(rayDiv).appendTo($(sunDiv));
    i--;
}

var mountainDiv = document.createElement("div");
mountainDiv.className = "mountain";

$(mountainDiv).appendTo($(viewDiv));

var mountainTopDiv = document.createElement("div");
mountainTopDiv.className = "mountain-top";

$(mountainTopDiv).appendTo($(mountainDiv));

var x = 1;

do {
    var mountainCapDiv = document.createElement("div");
    mountainCapDiv.className = "mountain-cap-"+x;

    $(mountainCapDiv).appendTo($(mountainTopDiv));

    x++;

} while (x < 4);


