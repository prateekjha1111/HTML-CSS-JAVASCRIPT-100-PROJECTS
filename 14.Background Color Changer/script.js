let isDarkMode = false;
document.getElementById('changeColorBtn').addEventListener('click', function() {
  toggleMode();
});

function toggleMode() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    setDarkMode();
  } else {
    setLightMode();
  }
}

function setDarkMode() {
  document.body.style.backgroundColor = '#333';
  document.body.style.color = '#fff';
}

function setLightMode() {
  document.body.style.backgroundColor = '#fff';
  document.body.style.color = '#333';
}
