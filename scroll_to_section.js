document.getElementById("section_from").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click")
  //add to section id
  var targetElement = document.getElementById("section_to");
  //add to target section
  console.log(targetElement, 'targetElement')
  if (targetElement) {
    var offset = targetElement.offsetTop - 0;
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }
});
