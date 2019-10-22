function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}








//(function() {
//var name = document.forms["RegForm"]["Name"];

//if (name.value == "")
//    {
//        alert("Please enter your name.");
//        name.focus();
//        return false;
//    } else(
//
//    )
//    return true;
//}
