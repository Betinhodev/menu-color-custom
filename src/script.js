// Selecione o elemento de entrada de texto e o botão
const corEscolhidaInput = document.getElementById("corEscolhida");
const button = document.getElementById("mudarCor");

// Adicione um ouvinte de evento para quando o botão for clicado
button.addEventListener("click", () => {
  // Obtenha o valor do input (código de cor)
  const novaCor = corEscolhidaInput.value;

  // Verifique se o valor inserido é um código de cor hexadecimal válido
  if (/^#[0-9A-F]{6}$/i.test(novaCor)) {
    // Atualize o valor da variável CSS
    document.documentElement.style.setProperty("--primary-color", novaCor);
  } else {
    // Exiba uma mensagem de erro se o código de cor for inválido
    alert("Por favor, insira um código de cor válido no formato #RRGGBB.");
  }
});
