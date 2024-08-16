window.addEventListener('load', function() {
  var script = document.createElement('script');
  script.textContent = `
    (function() {
      const faqQuestions = document.querySelectorAll(".faq-question");
      faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
          const answer = question.nextElementSibling;
          const icon = question.querySelector(".toggle-icon");
          question.classList.toggle("active");
          answer.classList.toggle("active");
          // 关闭其他打开的问题
          faqQuestions.forEach((q) => {
            if (q !== question) {
              const a = q.nextElementSibling;
              q.classList.remove("active");
              a.classList.remove("active");
            }
          });
        });
      });
    })();
  `;
  document.body.appendChild(script);
});