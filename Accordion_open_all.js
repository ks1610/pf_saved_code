document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll('[data-pf-type="Accordion3.Content.Wrapper"]');
  accordions.forEach(function (accordion) {
    accordion.classList.add("open");
    accordion.setAttribute("open", "");
  });
});
