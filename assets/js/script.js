//insert date at top of page
var currentDate = moment().format("dddd, MMMM Do");
console.log(currentDate);
$("#currentDay").text(currentDate);
//style based on time
//update every hour
var currentHour = moment().format("ha");
console.log(currentHour);

let timeIndex = [
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];
setInterval(function () {
  for (i = 0; i < timeIndex.length; i++) {
    let taskTime = $("#" + timeIndex[i]).attr("id");
    let taskTimeObj = moment(taskTime, "ha");
    console.log(taskTimeObj);
    if (taskTimeObj.isBefore(moment())) {
      $("#" + timeIndex[i]).addClass("past");
    } else if (taskTimeObj.isAfter(moment())) {
      $("#" + timeIndex[i]).addClass("future");
    } else {
      $("#" + timeIndex[i]).addClass("present");
    }
  }
}, 3600000);

//click events for box and buttons
$(".col-10").on("click", function () {
  var text = $(this).text().trim();

  var textInput = $("<textarea>").addClass("col-10").val(text);
  $(this).replaceWith(textInput);

  textInput.trigger("focus");
});
$("col-10").on("blur", "textarea", function () {
  var text = $(this).val();
  var index = $(this).attr("id");

  var taskP = $("<p>").addClass("col-10").text(text);
  $(this).replaceWith(taskP);
});

var saveTask = function () {};
//box to text area
//button to save
//save content to storage
//display saved schedule on load
//clear schedule if day is different than saved
