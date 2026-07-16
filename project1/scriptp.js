document.querySelectorAll('.faqbox').forEach(box => {
    box.querySelector('.faq-question').addEventListener('click', () => {
        box.classList.toggle('active');
    });
});