///js file most action will take place here

$(document).ready(function () {
    var momdate = moment();
    momdate = (momdate.format("MMMM Do YYYY"));

    var thetime = $("#currentDay");
    thetime.text(momdate);

    
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

        //
        mainDiv.append(newmainDiv);
        mainDiv.addClass("col-md-9");


    }

});
///we need 3 fields side by side and the time slots run hourly from 9 am to 5 pm
/// we need to run the entire thing though a loop that will compare the times
/// on each row to the current time (will pull current time from moment js and will only need hour to compare since this does not break down further)
/// events in the past are grey --
///the current hour needs to be red and future hours green
/// i will use conditional statements to change the css 
/// for saving the information we need to be able to write what is in the middle column 
/// to local storage using JSON when someone clicks a button in the right most column
// not sure how we will treat multiple entries yet (maybe add on to what is there since
/// if the page is reloaded the information is supossed to stay )
//
// i am forced to use bootstrap by the assignment template--
// we can add classes and use jquerry to create the template
//// what i have so far is borrowed in concept from an early exercise we did in class
/// might be a better way to accomplish it
/// creation of divs/ spans / asides ect will need to be done in the js file here with 
/// jquerry 
// 
///
///