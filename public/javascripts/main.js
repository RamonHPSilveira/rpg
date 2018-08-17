// function hideNameInput(){
// 	  // Get the checkbox
// 	  var checkBox = document.getElementById("randomName");
//   // Get the output text
//   var label = document.getElementById("js-label-name");
//   var input = document.getElementById("js-input-name");

//   // If the checkbox is checked, display the output text
//   if (checkBox.checked == false){
//   	label.style.display = "block";
//   	input.style.display = "block";
//   } else {
//   	label.style.display = "none";
//   	input.style.display = "none";
//   } 
// }
$(document).ready(function(){
	$("#randomName").click(function(){
		var checkBox = document.getElementById("randomName");
		if (checkBox.checked == false){
			$("#js-label-name").show();
			$("#js-input-name").show();
		}
		else{
			$("#js-label-name").hide();
			$("#js-input-name").hide();
		}

	});
})