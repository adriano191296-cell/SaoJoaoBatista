// Mostra uma seção do site e esconde todas as outras.
let secaoAtual = "inicio";
const historicoSecoes = [];

function mostrar(id, registrarHistorico = true) {
  // Procura a seção solicitada pelo id recebido.
  const secaoEscolhida = document.getElementById(id);

  if (!secaoEscolhida) {
    fecharMenu();
    return;
  }

  if (id === secaoAtual) {
    fecharMenu();
    return;
  }

  if (registrarHistorico) {
    historicoSecoes.push(secaoAtual);
  }

  // Remove a classe "ativa" de todas as seções.
  document.querySelectorAll("section").forEach((secao) => {
    secao.classList.remove("ativa");
  });

  // Se a seção existir, ela recebe a classe "ativa" e aparece na tela.
  secaoEscolhida.classList.add("ativa");
  secaoAtual = id;

  // Fecha o menu mobile depois de trocar de página.
  fecharMenu();

  // Leva o usuário de volta para o topo da página.
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Volta para a ultima secao visitada; se nao houver historico, retorna ao inicio.
function voltarPagina() {
  const secaoAnterior = historicoSecoes.pop() || "inicio";
  mostrar(secaoAnterior, false);
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
