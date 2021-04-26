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
tasks = [
  { time: "9am", taskData: "" },
  { time: "10am", taskData: "" },
  { time: "11am", taskData: "" },
  { time: "12pm", taskData: "" },
  { time: "1pm", taskData: "" },
  { time: "2pm", taskData: "" },
  { time: "3pm", taskData: "" },
  { time: "4pm", taskData: "" },
  { time: "5pm", taskData: "" },
];

var loadTasks = function () {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  if (!tasks) {
    tasks = [
      { time: "9am", taskData: "" },
      { time: "10am", taskData: "" },
      { time: "11am", taskData: "" },
      { time: "12pm", taskData: "" },
      { time: "1pm", taskData: "" },
      { time: "2pm", taskData: "" },
      { time: "3pm", taskData: "" },
      { time: "4pm", taskData: "" },
      { time: "5pm", taskData: "" },
    ];
  }

  $.each(tasks, function (index, data) {
    $("#" + data.time).text(data.taskData);
  });
};
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
loadTasks();
//click events for box and buttons
$(".col-10").on("click", function () {
  var text = $(this).text().trim();
  var id = $(this).attr("id");
  var textInput = $("<textarea>").addClass("col-10").attr("id", id).val(text);
  $(this).replaceWith(textInput);

  textInput.trigger("focus");
});
$("col-10").on("blur", "textarea", function () {
  var text = $(this).val();
  var id = $(this).attr("id");

  var taskP = $("<p>").addClass("col-10").attr("id", id).text(text);
  $(this).replaceWith(taskP);
});

$(".saveBtn").on("click", function () {
  var saveTask = $(this).prev().val().trim();
  var taskId = $(this).prev().attr("id");
  var taskIndex = timeIndex.indexOf(taskId);
  console.log(saveTask);
  console.log(taskId);
  console.log(taskIndex);

  tasks[taskIndex].taskData = saveTask;
  console.log(tasks[taskIndex].taskData);

  localStorage.setItem("tasks", JSON.stringify(tasks));
});

//box to text area
//button to save
//save content to storage
//display saved schedule on load
//clear schedule if day is different than saved
