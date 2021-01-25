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
        var txt = $("#area13").val();

        day[1] = txt
        localStorage.setItem(1, JSON.stringify(txt));
    });
    $("#btn2").click(function () {
        var txt = $("#area14").val();

        day[2] = txt
        localStorage.setItem(2, JSON.stringify(txt));
    });
    $("#btn3").click(function () {
        var txt = $("#area15").val();

        day[3] = txt
        localStorage.setItem(3, JSON.stringify(txt));
    });
    $("#btn4").click(function () {
        var txt = $("#area16").val();

        day[4] = txt
        localStorage.setItem(4, JSON.stringify(txt));
    });
    $("#btn5").click(function () {
        var txt = $("#area17").val();

        day[5] = txt
        localStorage.setItem(5, JSON.stringify(txt));
    });


    //   each time page is refreshed the information the user typed 
    // in each time slot is pulled from local storage and replaced for them 

    var storedData = JSON.parse(window.localStorage.getItem(9))
    $('#area9').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(10))
    $('#area10').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(11))
    $('#area11').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(12))
    $('#area12').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(1))
    $('#area13').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(2))
    $('#area14').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(3))
    $('#area15').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(4))
    $('#area16').val(storedData);

    var storedData = JSON.parse(window.localStorage.getItem(5))
    $('#area17').val(storedData);

    /// setting up moment to convert utc time to local time 
    /// puts local time to the second to alert box for now


    var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
    var stillUtc = moment.utc(date).toDate();
    var local = moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss');

    //   alert(local);

    var presentHour = moment().hour();
    //alert(presentHour);
    // if (presentHour = 23 {
    //     $("area9").css("background-color", "red");
    // }



    if (presentHour === 9) {
        $("#area9").css("background-color", "red");
    }

    if (presentHour === 10) {
        $("#area10").css("background-color", "red");
    }

    if (presentHour === 11) {
        $("#area11").css("background-color", "red");
    }

    if (presentHour === 12) {
        $("#area12").css("background-color", "red");
    }

    if (presentHour === 13) {
        $("#area13").css("background-color", "red");
    }

    if (presentHour === 14) {
        $("#area14").css("background-color", "red");
    }

    if (presentHour === 15) {
        $("#area15").css("background-color", "red");
    }

    if (presentHour === 16) {
        $("#area16").css("background-color", "red");
    }

    if (presentHour === 17) {
        $("#area17").css("background-color", "red");
    }

    for (i = 9; i < 18; i++) {
        var timeCheck = "#area" + i
        console.log(timeCheck)

        $(timeCheck).css("background-color", "grey")
    }






});







/// events in the past are grey --

///the current hour needs to be red and future hours green
/// i will use conditional statements to change the css 

/// for saving the information we need to be able to write what is in the middle column 
/// to local storage using JSON when someone clicks a button in the right most column





