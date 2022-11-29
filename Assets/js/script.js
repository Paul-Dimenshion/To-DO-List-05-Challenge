$(document).ready(function () {
  // Button function to clear local storage and clear contents
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  //day.js code for current date and time
   const events = document.querySelectorAll('header');

   events.forEach(event => {
    const date = dayjs(event.dataset.date).format('ddd, D MMM, YYYY. hh:mm A')
    const dateElement = event.querySelector('.date')
    dateElement.innerText = date
    })
  
    let currentHour = dayjs().hour()
  console.log(events)
  console.log(dayjs())

  //grabs hour from each time slot and compares it to actual time
  $(".time-block").each(function () {
    let timeBlock = $(this).attr("id");
    
    if (currentHour == timeBlock) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeBlock) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeBlock) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

    //grabs values from time and value divs and saves them to local storage
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      let value = $(this).siblings(".time-block").val();
      let time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
    });
  
    //retrieves items from local storage and sets them in proper places
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));
  });
  
