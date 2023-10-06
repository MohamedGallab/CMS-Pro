// Assuming you have a reference to the select element
var selectElement = document.getElementById(
  "ContentPlaceHolderright_ContentPlaceHoldercontent_stfIdLst"
);
if (selectElement.selectedIndex < 1) {
  selectElement.selectedIndex = 1; // Select the second option

  // Create a new 'change' event
  var evt = new Event("change", {
    bubbles: false,
    cancelable: true,
  });

  // Dispatch the 'change' event on the select element
  selectElement.dispatchEvent(evt);
} else {
  // Loop through all input elements on the page
  var inputElements = document.querySelectorAll('input[type="radio"]');
  var regex =
    /^ContentPlaceHolderright_ContentPlaceHoldercontent_objRptr_grade_(\d+)_(\d+)_(\d+)$/;

  var selectedRadioButtons = [];

  for (var i = 0; i < inputElements.length; i++) {
    var input = inputElements[i];
    var id = input.getAttribute("id");

    // Check if the id matches the pattern
    var match = regex.exec(id);
    if (match) {
      var part1 = parseInt(match[1]);
      var part2 = parseInt(match[2]);
      var part3 = parseInt(match[3]);

      // Check if the parts are within the specified range (1 to 13)
      if (
        part1 >= 0 &&
        part1 <= 13 &&
        part2 == 2 &&
        part3 >= 0 &&
        part3 <= 13
      ) {
        input.checked = true;
        // Add the matching input element to the selectedRadioButtons array
        selectedRadioButtons.push(input);
      }
    }
  }

  // Now, selectedRadioButtons contains all the radio buttons that match the pattern and fall within the specified range (1 to 13)
  console.log(selectedRadioButtons);

  // Assuming you have a reference to the submit button element
  var submitButton = document.getElementById(
    "ContentPlaceHolderright_ContentPlaceHoldercontent_pstEvalBtn"
  );

  // Trigger the 'change' event on the input element after a 3-second delay
  setTimeout(function () {
    console.log("hi?");
    // Simulate a click event on the submit button
    submitButton.click();
  }, 3000); // 3000 milliseconds (3 seconds)
}
