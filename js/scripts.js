$(document).ready(function() {
  $("form#form").submit(function(event) {
    
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    if(question1 === "elegence" && question2 === "adventurous" && question5 === "epicodus"){
      $(".flag").addClass("hide");
      $("#ruby").removeClass("hide");
    }else if(question1 === "brute" && question2 ===  "boring" && question3 === "desert"){
      $(".flag").addClass("hide");
      $("#python").removeClass("hide");
    }
    event.preventDefault();
  })
});