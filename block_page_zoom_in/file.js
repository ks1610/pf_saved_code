
  // Prevent zooming using touchpad and mouse wheel
  window.addEventListener('wheel', function (event) {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
    }
  }, { passive: false });

  // Prevent zooming on mobile devices
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // Disable zooming using keyboard shortcuts
  document.addEventListener('keydown', function (event) {
  // Check if Ctrl key is pressed (Cmd on Mac)
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.key === '0')) {
      event.preventDefault();
    }
  });
