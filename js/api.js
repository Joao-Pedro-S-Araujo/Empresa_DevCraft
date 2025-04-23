document.addEventListener("DOMContentLoaded", () => {
    const equipeContainer = document.getElementById("equipe-container");
  
    if (!equipeContainer) return;
  
    const membrosSalvos = localStorage.getItem("equipeDevCraft");
  
    if (membrosSalvos) {
      renderizarEquipe(JSON.parse(membrosSalvos));
    } else {
      fetch("https://randomuser.me/api/?results=4&nat=br")
        .then(response => response.json())
        .then(data => {
          const membros = data.results.map(membro => ({
            nome: `${membro.name.first} ${membro.name.last}`,
            foto: membro.picture.large,
            cargo: gerarCargoAleatorio(),
            descricao: gerarDescricaoAleatoria()
          }));
  
          localStorage.setItem("equipeDevCraft", JSON.stringify(membros));
          renderizarEquipe(membros);
        })
        .catch(error => {
          equipeContainer.innerHTML = "<p>Erro ao carregar equipe.</p>";
          console.error(error);
        });
    }
  
    function renderizarEquipe(membros) {
      equipeContainer.innerHTML = membros.map(m => `
        <div class="membro">
          <img src="${m.foto}" alt="${m.nome}">
          <h2>${m.nome}</h2>
          <p>${m.cargo}</p>
          <span>${m.descricao}</span>
        </div>
      `).join('');
    }
  
    function gerarCargoAleatorio() {
      const cargos = ["Desenvolvedor Front-end", "Desenvolvedor Back-end", "UX/UI Designer", "Analista de Sistemas"];
      return cargos[Math.floor(Math.random() * cargos.length)];
    }
  
    function gerarDescricaoAleatoria() {
      const descricoes = [
        "Especialista em soluções digitais modernas.",
        "Apaixonado por inovação e boas práticas de código.",
        "Focado em proporcionar a melhor experiência ao usuário.",
        "Transformando ideias em aplicações eficientes."
      ];
      return descricoes[Math.floor(Math.random() * descricoes.length)];
    }
  });
  