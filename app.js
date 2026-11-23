const pecas = [{
  nome: "Manta Horizonte",
  grupo: "Têxteis",
  nota: "Algodão leve para tardes tranquilas."
},
{
  nome: "Tigela Areia",
  grupo: "Cerâmica",
  nota: "Peça artesanal de formas simples."
},
{
  nome: "Luminária Arco",
  grupo: "Iluminação",
  nota: "Luz suave para leitura e descanso."
},
{
  nome: "Almofada Linha",
  grupo: "Têxteis",
  nota: "Textura discreta em tons naturais."
},
];
let filtro = "Tudo";
const area = document.querySelector("#colecao");
function renderizarColecao() {
  area.replaceChildren();
  const selecionadas = pecas.filter((peca) => filtro === "Tudo" || peca.grupo === filtro);
  selecionadas.forEach((peca,
  indice) => {
    const cartao = document.createElement("article");
    cartao.className = "cartao";
    const etiqueta = document.createElement("p");
    etiqueta.className = "etiqueta";
    etiqueta.textContent = `0${indice + 1} · ${peca.grupo}`;
    const nome = document.createElement("h2");
    nome.textContent = peca.nome;
    const nota = document.createElement("p");
    nota.textContent = peca.nota;
    cartao.append(etiqueta,
    nome,
    nota);
    area.append(cartao);
  });
}
document.querySelector("#filtros").addEventListener("click",
(evento) => {
  const grupo = evento.target.dataset.grupo;
  if (grupo) {
    filtro = grupo;
    renderizarColecao();
  }
});
renderizarColecao();



