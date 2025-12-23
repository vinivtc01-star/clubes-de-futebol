document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("campo-busca");
  const lista = document.getElementById("lista-sugestoes");

  if (!input || !lista || typeof CLUBES === "undefined") return;

  // Remove acentos e normaliza texto (ESSENCIAL p/ mobile)
  function normalizarTexto(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  input.addEventListener("input", () => {
    const texto = normalizarTexto(input.value);
    lista.innerHTML = "";

    if (!texto) {
      lista.style.display = "none";
      return;
    }

    const resultados = CLUBES.filter(clube =>
      normalizarTexto(clube.nome).includes(texto)
    );

    resultados.forEach(clube => {
      const li = document.createElement("li");

      li.innerHTML = `
        ${clube.nome}
        <small style="opacity:0.6;">(${clube.pais})</small>
      `;

      li.addEventListener("click", () => {
        // Fecha a lista
        lista.style.display = "none";
        input.value = "";

        // Vai para a página + clube
        window.location.href = `${clube.pagina}#${clube.id}`;
      });

      lista.appendChild(li);
    });

    lista.style.display = resultados.length ? "block" : "none";
  });

  // Fecha a lista ao clicar fora
  document.addEventListener("click", e => {
    if (!e.target.closest(".busca-container")) {
      lista.style.display = "none";
    }
  });
});


