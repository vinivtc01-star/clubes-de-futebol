document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("campo-busca");
  const lista = document.getElementById("lista-sugestoes");

  input.addEventListener("input", () => {
    const texto = input.value.toLowerCase();
    lista.innerHTML = "";

    if (!texto) {
      lista.style.display = "none";
      return;
    }

    const resultados = CLUBES.filter(c =>
      c.nome.toLowerCase().includes(texto)
    );

    resultados.forEach(c => {
      const li = document.createElement("li");
      li.innerHTML = `${c.nome} <small>(${c.pais})</small>`;

      li.addEventListener("click", () => {
  lista.style.display = "none"; // fecha sugestões
  input.value = "";             // limpa campo
  window.location.href = `${c.pagina}#${c.id}`;
});

      lista.appendChild(li);
    });

    lista.style.display = resultados.length ? "block" : "none";
  });
});

