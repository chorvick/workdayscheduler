///js file most action will take place here

// Write a function that takes In an hour and returns the name of the class



$(document).ready(function () {
    // Set the time at the top of the page.
    var momdate = moment();
    let now = new Date().getHours()
    //console.warn(now)

    momdate = (momdate.format("MMMM Do YYYY"));
    var thetime = $("#currentDay");
    thetime.text(momdate);
    var mainDiv = $("#mainarea");

    for (var i = 9; i < 24; i++) {
        var ampm = "";
        if (i >= 12) {
            ampm = " PM";
        } else { ampm = " AM" }
        var j = i;

        if (i > 12) {
            j = i - 12
        }
        // var newmainDiv = $("<div>" + j + ampm + "</div>");
        // newmainDiv.addClass("col-md-9");
        // mainDiv.append(newmainDiv);

        mainDiv.append(`<div class="row">
        <div class="col-md-3">
        <p>${j} ${i >= 12 ? "pm" : "am"}</p></div><div class="col-md-6"><input class="textarea" type="textarea"/><button class="saveBtn" hour=${i}>Save</button></div></div>`)






    }


    $("div").css("border", "1px solid black");

    //$("div.first").css("border", "2px solid red");


});
    //mainDiv.addClass("input-group mb-3");
    //  mainDiv.addClass("input-group-prepend");



    //   $("div").append("<button>");


///we need 3 fields in each row side by side and the time slots run hourly from 9 am to 5 pm
//the time and save button should be smaller taking up only 1 or 2 of 12 slots with 
//  a majority of the available bootstrap slots going to the area for the user to 
// put their events 
/// we need to run the entire thing though a loop that will compare the times
/// on each row to the current time (will pull current time from moment js and will only need hour to compare since this does not break down further)



/// events in the past are grey --  so if x time is less than current time we can style it grey  if equal
// will style it red
// if the evaluated time is greater than the current time we style it green

///the current hour needs to be red and future hours green
/// i will use conditional statements to change the css 

/// for saving the information we need to be able to write what is in the middle column 
/// to local storage using JSON when someone clicks a button in the right most column


// not sure how we will treat multiple entries yet (maybe add on to what is there since
/// if the page is reloaded the information is supossed to stay )

/// the demo shows people being able to change their data so each time the save button is
///clicked it will be erasing old local storage and replacing it 
//


// i am forced to use bootstrap by the assignment template--
// we can add classes and use jquerry to create the template
//// 
/// 
/// creation of divs/ spans / asides ect will need to be done in the js file here with 
/// jquerry 
// 
///
///