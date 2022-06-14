function calcAge(ano_aniversario, mes_aniversario, dia_aniversario) {
  var d = new Date(),
    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),
    ano_aniversario = +ano_aniversario,
    mes_aniversario = +mes_aniversario,
    dia_aniversario = +dia_aniversario,
    quantos_anos = ano_atual - ano_aniversario;

  if (
    mes_atual < mes_aniversario ||
    (mes_atual == mes_aniversario && dia_atual < dia_aniversario)
  ) {
    quantos_anos--;
  }

  return quantos_anos < 0 ? 0 : quantos_anos;
}

let wrapper = document.querySelector(".currentAge"),
  // Pega a string do conteúdo atual
  HTMLTemporario = wrapper.innerHTML,
  // Novo HTML que será inserido
  HTMLNovo = calcAge(1988, 11, 11);

// Concatena as strings colocando o novoHTML antes do HTMLTemporario
HTMLTemporario = HTMLNovo + HTMLTemporario;

// Coloca a nova string(que é o HTML) no DOM
wrapper.innerHTML = HTMLTemporario;
