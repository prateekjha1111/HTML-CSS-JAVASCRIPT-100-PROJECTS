const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ];
  
  let autoTextInterval;
  let isAutoTextRunning = false;
  
  document.getElementById('toggleBtn').addEventListener('click', function() {
    if (isAutoTextRunning) {
      stopAutoText();
    } else {
      startAutoText();
    }
  });
  
  function startAutoText() {
    isAutoTextRunning = true;
    autoTextInterval = setInterval(changeText, 2000); // Change text every 2 seconds
  }
  
  function stopAutoText() {
    isAutoTextRunning = false;
    clearInterval(autoTextInterval);
  }
  
  function changeText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    document.getElementById('text').textContent = texts[randomIndex];
  }
  