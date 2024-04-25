window.addEventListener('DOMContentLoaded', function () {
  // Get all elements with the class "col-1"
  var colElements = document.querySelectorAll('.col-1');

  // Get the row element
  var colElement = document.getElementById('col-2');

  // Add click event listener to each column element
  colElements.forEach(function (col) {
    col.addEventListener('click', function () {
      // Scroll to the row element
      colElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
