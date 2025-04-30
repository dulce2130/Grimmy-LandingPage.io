const messages = [
    "I’m Maxito and I approve this layout 🐾",
    "Have you smiled today? 😺",
    "Let’s scroll and shine! ✨",
    "CSS is my catnip 😻",
  ];
  
  const messageEl = document.getElementById("maxito-message");
  
  function changeMessage() {
    const random = Math.floor(Math.random() * messages.length);
    messageEl.textContent = messages[random];
  }
  
  setInterval(changeMessage, 6000);
  