$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    if(question1 === undefined || question2 === undefined || question3 === undefined || question4 === undefined || question5 === undefined){
      alert("Please complete the survey before submitting!")
    }else if(question1 === "elegence" && question2 === "adventurous" && question5 === "epicodus"){
      $(".flag").addClass("hide");
      $("#ruby").removeClass("hide");
    }else if(question1 === "elegence" && question2 ===  "adventurous" && question5 === "college"){
      $(".flag").addClass("hide");
      $("#ruby").removeClass("hide");
    }else if(question1 === "elegence" && question2 ===  "between2" && question5 === "epicodus"){
      $(".flag").addClass("hide");
      $("#ruby").removeClass("hide");
    }else if(question1 === "elegence" && question2 ===  "bewteen2" && question5 === "college"){
      $(".flag").addClass("hide");
      $("#ruby").removeClass("hide");
    
    }else if(question1 === "brute" && question2 ===  "boring" && question3 === "desert"){
      $(".flag").addClass("hide");
      $("#python").removeClass("hide");
    }else if(question1 === "brute" && question2 ===  "boring" && question3 === "forest"){
      $(".flag").addClass("hide");
      $("#python").removeClass("hide");
    }else if(question1 === "brute" && question2 ===  "between2" && question3 === "forest"){
      $(".flag").addClass("hide");
      $("#python").removeClass("hide");
    }else if(question1 === "brute" && question2 ===  "between2" && question3 === "desert"){
      $(".flag").addClass("hide");
      $("#python").removeClass("hide");
    
    }else if(question1 === "between" && question3 ===  "forest" && question4 === "no"){
      $(".flag").addClass("hide");
      $("#rust").removeClass("hide");
    }else if(question1 === "between" && question3 ===  "forest" && question4 === "reddit"){
      $(".flag").addClass("hide");
      $("#rust").removeClass("hide");
    }else if(question1 === "between" && question3 ===  "money" && question4 === "no"){
      $(".flag").addClass("hide");
      $("#rust").removeClass("hide");
    }else if(question1 === "between" && question3 ===  "money" && question4 === "reddit"){
      $(".flag").addClass("hide");
      $("#rust").removeClass("hide");
   
    }else if(question1 === "elegence" && question2 ===  "boring" && question5 === "highschool"){
      $(".flag").addClass("hide");
      $("#swift").removeClass("hide");
    }else if(question1 === "elegence" && question2 ===  "boring" && question5 === "epicodus"){
      $(".flag").addClass("hide");
      $("#swift").removeClass("hide");
    }else if(question1 === "brute" && question2 ===  "adventurous" && question5 === "highschool"){
      $(".flag").addClass("hide");
      $("#swift").removeClass("hide");
    }else if(question1 === "brute" && question2 ===  "adventurous" && question5 === "epicodus"){
      $(".flag").addClass("hide");
      $("#swift").removeClass("hide");
    }else if(question1 === "between" && question3 ===  "desert"){
      $(".flag").addClass("hide");
      $("#js").removeClass("hide");
    }else{
      $(".flag").addClass("hide");
      $("#js").removeClass("hide");
    }
  })
});