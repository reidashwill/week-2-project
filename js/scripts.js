$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var question1 = $("input:radio[name=question1]:checked").val();
    if(question1 === elegence) {
      $("#ruby").show();
    }
  })
});