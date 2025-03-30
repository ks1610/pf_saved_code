/*For sticky section*/
document.addEventListener("DOMContentLoaded", function () {
  const stickySection = document.querySelector(".pf-sticky");
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
        const triggerPoint = document.body.scrollHeight / 15; // Adjust to make ticky section appear earlier or later here
        if (scrollPosition > triggerPoint) {
          stickySection.classList.add("sticky-visible"); // Show the section
        } else {
          stickySection.classList.remove("sticky-visible"); // Hide the section
        }
      });
});
