window.addEventListener('load', function() {
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      question.classList.toggle("active");
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      
      // 关闭其他打开的问题
      faqQuestions.forEach((q) => {
        if (q !== question) {
          q.classList.remove("active");
          q.nextElementSibling.style.display = 'none';
        }
      });
    });
  });
});