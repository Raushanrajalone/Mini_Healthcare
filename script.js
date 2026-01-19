document.addEventListener("DOMContentLoaded", function() {
  // Staggered entrance for cards
  const cards = document.querySelectorAll('.card');
  cards.forEach((c, i) => {
     setTimeout(() => {
      c.classList.add('visible');
      // alternate slide classes
      if (i % 2 === 0) c.classList.add('slide-left'); else c.classList.add('slide-right');
      }, 60 * i);
  });
  // Auto-response form submission with animation
  const form = document.getElementById("supportForm");
  const responseMsg = document.getElementById("responseMsg");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    responseMsg.innerText = "Thanks for submitting the form. Our healthcare representatives will connect with you soon.";
    // add pop animation and then clear after a bit
    responseMsg.classList.add('response-animate');
    // allow reset after animation
    responseMsg.addEventListener('animationend', function handler() {
      responseMsg.classList.remove('response-animate');
      responseMsg.removeEventListener('animationend', handler);
    });
    this.reset();
  });
  // FAQ Chatbot 
  const answerEl = document.getElementById('chatbotAnswer');
  window.showAnswer = function(topic) {
    let answer = "";
    if (topic === "fever") {
        answer = "Drink fluids, take rest, and consult a doctor if fever lasts more than 2 days.";
    } else if (topic === "cold") {
        answer = "Take warm fluids and rest. See a doctor if symptoms worsen.";
    } else if (topic === "emergency") {
        answer = "Please contact the nearest hospital or emergency services immediately.";
    }
      // typing effect (faster)
      typeText(answerEl, answer, 12);
    };
  // Type text 
  function typeText(el, text, speed = 14) {
    el.classList.add('typing-cursor');
    el.textContent = '';
    let i = 0;
    const t = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(t);
        // keep cursor briefly then remove
        setTimeout(() => el.classList.remove('typing-cursor'), 300);
      }
    }, speed);
  }
});

