// Mostra uma seção do site e esconde todas as outras.
function mostrar(id) {
  // Remove a classe "ativa" de todas as seções.
  document.querySelectorAll("section").forEach((secao) => {
    secao.classList.remove("ativa");
  });

  // Procura a seção solicitada pelo id recebido.
  const secaoEscolhida = document.getElementById(id);

  // Se a seção existir, ela recebe a classe "ativa" e aparece na tela.
  if (secaoEscolhida) {
    secaoEscolhida.classList.add("ativa");
  }

  // Fecha o menu mobile depois de trocar de página.
  fecharMenu();

  // Leva o usuário de volta para o topo da página.
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Abre ou fecha o menu mobile quando o botão hamburguer é clicado.
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("aberto");
}

// Fecha o menu mobile removendo a classe de abertura.
function fecharMenu() {
  document.getElementById("mobileMenu").classList.remove("aberto");
}

// Impede que links com href="#" recarreguem ou pulem a página.
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
  });
});
