var Students = [];

function showStudents() {
  $("#show").click(function (e) {
    $(".students").html("");

    var person = localStorage.getItem("Students");
    var peoples = JSON.parse(person);

    $.each(peoples, function (idx, people) {
      //   console.log(people.classes);
      $(".students").append(`
      <div class="student">
        <p>${people.name}</p>
        <img src="images/profile-placeholder.png">
        <div class="content">
          <div class="left">
            <p><u>Age</u></p> 
            <p>${people.age}</p>
            <p><u>Phone Number</u></p>
            <p>${people.phone}</p>
            <p><u>Email</u></p>
            <p>${people.email}</p>
          </div>
          <div class="right">
            <p><u>Classes</u></p>
            <div class="classes" id="classes${idx}"></div>
          </div>
          </div>
        </div>
        
        
      </div>`);
      $.each(people.classes, function (index, course) {
        // console.log(course);
        // console.log(course[index]);
        $(`#classes${idx}`).append(`
            <p class="course">${index}. ${course}</p>
        `);
      });
    });
  });
}

function initListener() {
  $("#submit").click(function (e) {
    // console.log("yes");

    let firstName = $("#first-name").val();
    let lastName = $("#last-name").val();
    let age = $("#age").val();
    let phone = $("#phone").val();
    let email = $("#email-address").val();
    let classes = $("#classes").val();

    let stuClasses = classes.split(", ");

    // console.log(stuClasses);

    let studentObject = {
      name: firstName + " " + lastName,
      age: age,
      phone: phone,
      email: email,
      classes: stuClasses,
    };

    Students.push(studentObject);

    localStorage.setItem("Students", JSON.stringify(Students));

    $("#first-name").val("");
    $("#last-name").val("");
    $("#age").val("");
    $("#phone").val("");
    $("#email-address").val("");
    $("#classes").val("");

    showStudents();
  });
}

$(document).ready(function () {
  initListener();
  showStudents();
});
