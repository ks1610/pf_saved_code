//in casse cx ask for the product media
window.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('video');
  if (video) {
    video.muted = true;
  video.autoplay = true;
  video.playsInline = true; // Required for iOS
  video.play().catch(function (error) {
    console.log("Autoplay failed:", error);
      });
    }
  });
