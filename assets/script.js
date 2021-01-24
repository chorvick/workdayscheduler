///js file most action will take place here
//// make an object called day which will store the text the user inputs 
var day = {
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
}




$(document).ready(function () {
    var momdate = moment();
    momdate = (momdate.format("MMMM Do YYYY"));

    var thetime = $("#currentDay");
    thetime.text(momdate);


    //// this code will probably not be used now that we have made the 
    /// template in the index file --- commented out for now but will
    /// likely not use  still may be helpful later 
    // var mainDiv = $("#mainarea");
    // var ampm = "";
    // for (var i = 9; i < 18; i++) {
    //     if (i >= 12) {
    //         ampm = " PM";
    //     } else { ampm = " AM" }


    //     var j = i;
    //     if (i > 12) {
    //         j = i - 12
    //     }
    //     var newmainDiv = $("<div>" + j + ampm + "</div>");
    //
    //mainDiv.append(newmainDiv);
    //   mainDiv.addClass("row");
    // mainDiv.addClass("col-md-9");


    /// used j querry to put a black border around everything for now to be able to easly 
    /// see each section

    $("div").css("border", "2px solid black");



    $("#btn9").click(function () {
        var txt = $("#area9").val();
        alert(txt);
    });




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
// on advice from instuctor decided to use html to make the form in index file
/// then use jquerry to get storage working and worry about the
///changing of colors last
///  
// so will scrap code where the template is made here , 
// was much easier to make in the index file...
// 
///
///