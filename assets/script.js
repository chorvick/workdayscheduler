///js file most action will take place here


var momdate = moment();
momdate = (momdate.format("MMMM Do YYYY"));

var showtime = $("#currentday");


var thetime = $("<p>" + momdate + "</p>");
showtime.append(thetime);
console.log(thetime);
//alert(momdate);
/// 
var activetime = [
    "9 AM ",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM"
];
var mainDiv = $("#mainarea");
for (var i = 0; i < activetime.length; i++) {


    var newmainDiv = $("<div>" + activetime[i] + "</div>");

    // It then adds this new div to main div.
    mainDiv.append(newmainDiv);
    mainDiv.addClass("col-md-9");


}