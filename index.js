document.addEventListener("DOMContentLoaded", function () {
  function generateDrops() {
    // Get the div with id "drops"
    const dropsDiv = document.getElementById("drops");

    // Create and append 14 div elements with the specified classes
    for (let i = 1; i <= 14; i++) {
      const drop = document.createElement("div");
      drop.className = "drop drop" + i;
      dropsDiv.appendChild(drop);
    }
  }
  generateDrops();
  function createLetterElement(text, num) {
    // Create the main container
    const letterContainer = document.createElement("div");
    letterContainer.className = "letter hideLetter";
    if (num === 12) {
      letterContainer.className = "letter";
    } else {
      letterContainer.className = "letter hideLetter";
    }
    // Create the text content container
    const textContentContainer = document.createElement("div");
    textContentContainer.className = `text-content t${num}`;

    // Create the letter background container
    const letterBgContainer = document.createElement("div");
    letterBgContainer.className = `letter-bg-${num}`;
    if (num === 12) {
      const slideLeft = document.createElement("div");
      slideLeft.className = "slide-left";
      slideLeft.textContent = text;
      letterBgContainer.appendChild(slideLeft);
    } else {
      letterBgContainer.textContent = text;
    }

    // letterBgContainer.textContent = text;

    // Append letter background container to text content container
    textContentContainer.appendChild(letterBgContainer);

    // Append text content container to main container
    letterContainer.appendChild(textContentContainer);

    // Create the circle container
    const circleContainer = document.createElement("div");
    circleContainer.className = "circle-container";

    // Create 12 circles and append them to the circle container
    for (let i = 0; i < 12; i++) {
      const circle = document.createElement("div");
      circle.className = `circle c${num}`;
      circleContainer.appendChild(circle);
    }

    // Append circle container to main container
    letterContainer.appendChild(circleContainer);

    const lettersDiv = document.getElementById("letters");
    lettersDiv.appendChild(letterContainer);
  }
  const letters = [
    "<",
    "t",
    "e",
    "a",
    "c",
    "h",
    "m",
    "e",
    "c",
    "o",
    "d",
    "e",
    "/",
    ">",
  ];
  for (let i = 1; i <= letters.length; i++) {
    createLetterElement(letters[i - 1], i);
  }
  function setAnimationDelays(startDelay, k) {
    const drops = document.querySelectorAll(".drop");
    let delay = startDelay;

    drops.forEach((drop, index) => {
      drop.style.animationDelay = `${delay}s`;
      delay += k;
    });
  }
  function setLetterBgDelays(d, totalElements) {
    for (let i = 1; i <= totalElements; i++) {
      const letterClass = `.letter-bg-${i}`;
      const letterElement = document.querySelector(letterClass);

      letterElement.style.animationDelay = `${d}s`;
    }
  }

  setLetterBgDelays(5, 14);
  setAnimationDelays(1, 0.3);
  function repeatAnimation() {
    var container = document.getElementById("main");

    if (container) {
      var parent = container.parentNode;

      var clone = container.cloneNode(true);

      parent.removeChild(container);
      parent.appendChild(clone);
    }
  }

  setInterval(repeatAnimation, 13000);
});
