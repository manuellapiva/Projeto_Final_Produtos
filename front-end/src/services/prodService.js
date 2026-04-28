import API_URL from "./api";

export async function getProdutos() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function criarProduto(dados) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  });
}

export async function atualizarProduto(id, dados) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  });
}

export async function deletarProduto(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
}
