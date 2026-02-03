document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".link-info").forEach(link => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();

      const card = e.target.closest(".cartao-clube");
      const id = card.dataset.id;

      const resposta = await fetch(`http://localhost:3000/clubes/${id}`);
      const clube = await resposta.json();

      document.getElementById("nome-clube").innerText = clube.nome;
      document.getElementById("historia-clube").innerText = clube.historia;
      document.getElementById("pais-clube").innerText = clube.pais;
      document.getElementById("fundacao-clube").innerText = clube.fundacao;
      document.getElementById("site-clube").href = clube.site_oficial;

      document.getElementById("modal-clube").style.display = "flex";
    });
  });

  document.querySelectorAll(".link-info").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const c = link.closest(".cartao-clube");

    document.getElementById("modal-nome").textContent = c.dataset.nome;
    document.getElementById("modal-info").textContent =
      `${c.dataset.pais} • Fundação: ${c.dataset.fundacao}`;

    document.getElementById("modal-escudo").src = c.dataset.escudo;
    document.getElementById("modal-header").style.backgroundImage =
      `url('${c.dataset.fundo}')`;

    document.getElementById("modal-elenco").src = c.dataset.elenco;

    document.getElementById("modal-estadio-nome").textContent =
      `Estádio: ${c.dataset.estadioNome}`;

    document.getElementById("modal-estadio-img").src =
      c.dataset.estadioImg;

    document.getElementById("modal-historia").textContent =
      c.dataset.historia;

    document.getElementById("modal-clube").style.display = "flex";
  });
});

// fechar modal
document.querySelector(".fechar-modal").onclick =
document.querySelector(".modal-overlay").onclick = () => {
  document.getElementById("modal-clube").style.display = "none";
};
});

