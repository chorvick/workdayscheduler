///js file most action will take place here
//// make an object called day which will store the text the user inputs 

var day = {
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
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

    /////each button has an id to store to the day object the data when the button is clicked 

    $("#btn9").click(function () {
        var txt = $("#area9").val();
        day[9] = txt;;
        localStorage.setItem(9, JSON.stringify(txt));
    });

    $("#btn10").click(function () {
        var txt = $("#area10").val();

        day[10] = txt
        localStorage.setItem(10, JSON.stringify(txt));
    });
    $("#btn11").click(function () {
        var txt = $("#area11").val();

        day[11] = txt
        localStorage.setItem(11, JSON.stringify(txt));
    });
    $("#btn12").click(function () {
        var txt = $("#area12").val();

        day[12] = txt
        localStorage.setItem(12, JSON.stringify(txt));
    });
    $("#btn1").click(function () {
        var txt = $("#area1").val();

        day[1] = txt
        localStorage.setItem(1, JSON.stringify(txt));
    });
    $("#btn2").click(function () {
        var txt = $("#area2").val();

        day[2] = txt
        localStorage.setItem(2, JSON.stringify(txt));
    });
    $("#btn3").click(function () {
        var txt = $("#area3").val();

        day[3] = txt
        localStorage.setItem(3, JSON.stringify(txt));
    });
    $("#btn4").click(function () {
        var txt = $("#area4").val();

        day[4] = txt
        localStorage.setItem(4, JSON.stringify(txt));
    });
    $("#btn5").click(function () {
        var txt = $("#area5").val();

        day[5] = txt
        localStorage.setItem(5, JSON.stringify(txt));
    });


    //   

    var storedData = JSON.parse(window.localStorage.getItem(9))
    $('#area9').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(10))
    $('#area10').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(11))
    $('#area11').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(12))
    $('#area12').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(1))
    $('#area1').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(2))
    $('#area2').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(3))
    $('#area3').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(4))
    $('#area4').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(5))
    $('#area5').val(storedData);



    ///write function to write the data from local
    ///storage back in to calendar
    ////--- everything saved should have been
    ///put in a function really instead of doing each 
    ///separate on its own line
    ///into local storage















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