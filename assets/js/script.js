// This is to display the current time on the html

(function()
{
  // instantiate a moment object
  var NowMoment = moment().format('dddd, MMMM Do');
  
  // display value of moment object in #displayMoment div
  var eCurrentDay = document.getElementById("currentDay");
  eCurrentDay.innerHTML = NowMoment;
})();

$("textarea").blur()

var taskNotification = function() {

    var currentTime = moment().format("H")
  
    $("textarea").each(function() {

        var hour = parseInt($(this).attr('data-hour'))

        console.log(hour);
        if (hour == currentTime) {
            $(this).addClass("present");
        } else if (hour > currentTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }
    })
  
  }
taskNotification();

setInterval(taskNotification,15000);

// Save Function to localStorage
$(document).ready(function() {
  $(".saveBtn").on('click', function() {
      var saveDescription = $(this).siblings(".description").val();
      var saveHour = $(this).parent().attr("id");

      localStorage.setItem(saveHour, saveDescription);
  })

  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  $("#hour18 .description").val(localStorage.getItem("hour18"));
})
