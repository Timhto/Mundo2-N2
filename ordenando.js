// Array de valores
const valores = [];

// Elementos HTML
const novoValorInput = document.getElementById("novo-valor");
const adicionarValorButton = document.getElementById("adicionar-valor");
const valoresLista = document.getElementById("valores-lista");
const ordenarValoresButton = document.getElementById("ordenar-valores");
const misturarValoresButton = document.getElementById("misturar-valores");
const algoritmoSelect = document.getElementById("algoritmo");

// Adiciona um valor na lista de valores
function adicionarValor() {
  const valor = Number(novoValorInput.value);
  if (!isNaN(valor)) {
    valores.push(valor);
    const novoItem = document.createElement("li");
    novoItem.textContent = valor;
    valoresLista.appendChild(novoItem);
    novoValorInput.value = "";
  }
}

// Ordena os valores de acordo com o algoritmo selecionado
function ordenarValores() {
  const algoritmo = algoritmoSelect.value;
  if (algoritmo === "bubble") {
    bubble_sort(valores);
  } else if (algoritmo === "selection") {
    selectionSort(valores);
  } else if (algoritmo === "quick") {
    quickSort(valores, 0, valores.length - 1);
  }
  atualizarLista();
}

// Mistura os valores da lista
function misturarValores() {
  shuffle(valores);
  atualizarLista();
}

// Atualiza a lista de valores
function atualizarLista() {
  valoresLista.innerHTML = "";
  for (const valor of valores) {
    const novoItem = document.createElement("li");
    novoItem.textContent = valor;
    valoresLista.appendChild(novoItem);
  }
}

// Adiciona o evento de clique no botão "Adicionar"
adicionarValorButton.addEventListener("click", adicionarValor);

// Adiciona o evento de pressionar a tecla Enter no campo de entrada numérico
novoValorInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    adicionarValor();
  }
});

// Adiciona o evento de clique no botão "Ordenar"
ordenarValoresButton.addEventListener("click", ordenarValores);

// Adiciona o evento de clique no botão "Misturar"
misturarValoresButton.addEventListener("click", misturarValores);

  
  