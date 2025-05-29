document.querySelectorAll('.faq-pergunta').forEach(btn => {
    btn.addEventListener('click', () => {
      const resposta = btn.nextElementSibling;
      resposta.style.display = resposta.style.display === 'block' ? 'none' : 'block';
    });
  });

  