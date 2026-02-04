document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("modal-clube");

  document.querySelectorAll(".link-info").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("ABRINDO MODAL");
      modal.style.display = "flex";
    });
  });

});


document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("modal-clube");
  const fechar = document.getElementById("fechar-modal");
  const overlay = modal.querySelector(".modal-overlay");

  document.querySelectorAll(".link-info").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const card = e.target.closest(".cartao-clube");
      if (!card) return;

      const data = card.dataset;

      // Escudo
      document.getElementById("modal-escudo").src = data.escudo || "";

      // Dados principais
      document.getElementById("modal-nome").innerText = data.nome || "";
      document.getElementById("modal-pais").innerText = data.pais || "";
      document.getElementById("modal-fundacao").innerText = data.fundacao || "";

      // História
      document.getElementById("modal-historia").innerText = data.historia || "";

      // Títulos
      document.getElementById("modal-titulos").innerText = data.titulos || "";

      // Mascote
      document.getElementById("modal-mascote-nome").innerText = data.mascoteNome || "";
      document.getElementById("modal-mascote-link").href = data.mascoteImg || "#";

      // Estádio
      document.getElementById("modal-estadio-nome").innerText = data.estadioNome || "";
      document.getElementById("modal-estadio-link").href = data.estadioImg || "#";

      // Site
      const site = document.getElementById("modal-site");
      site.href = data.site || "#";
      site.innerText = "Acessar site";

      modal.style.display = "flex";
    });
  });

  fechar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  overlay.addEventListener("click", () => {
    modal.style.display = "none";
  });


});
