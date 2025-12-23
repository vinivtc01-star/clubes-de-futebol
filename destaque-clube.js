function destacarClubePorHash() {
  const id = window.location.hash.substring(1);
  if (!id) return;

  const clube = document.getElementById(id);
  if (!clube) return;

  // Remove destaque anterior
  document
    .querySelectorAll(".destaque-clube")
    .forEach(el => el.classList.remove("destaque-clube"));

  // Scroll até o clube
  clube.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  // Aplica destaque
  clube.classList.add("destaque-clube");
}

// Quando a página carrega
document.addEventListener("DOMContentLoaded", destacarClubePorHash);

// Quando o hash muda (mesma página)
window.addEventListener("hashchange", destacarClubePorHash);