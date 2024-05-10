const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const warningMessage = document.getElementById('warning-message');

yesBtn.addEventListener('click', () => {
  // Redirect to index.html on "Yes" click
  window.location.href = "home.html";
});

noBtn.addEventListener('click', () => {
  warningMessage.classList.remove('hidden'); // Display warning message on "No" click
});
