import { useEffect, useState } from "react";
import {
  getProdutos,
  criarProduto,
  atualizarProduto,
  deletarProduto
} from "./services/prodService";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    preco: "",
    estoque: "",
    categoria: ""
  });

  const [produtoEditando, setProdutoEditando] = useState(null);

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    try {
      setLoading(true);
      setErro(false);
      const dados = await getProdutos();
      setProdutos(dados);
    } catch {
      setErro(true);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function editar(p) {
    setProdutoEditando(p);
    setForm(p);
  }

  async function deletar(id) {
    if (!confirm("Excluir produto?")) return;
    await deletarProduto(id);
    carregarProdutos();
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.nome || !form.preco || !form.estoque || !form.categoria) {
      alert("Preencha tudo!");
      return;
    }

    if (produtoEditando) {
      await atualizarProduto(produtoEditando.id, form);
    } else {
      await criarProduto(form);
    }

    setForm({ nome: "", preco: "", estoque: "", categoria: "" });
    setProdutoEditando(null);
    carregarProdutos();
  }

  return (
    <div>
      <h1>Produtos</h1>

      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
        <input name="preco" placeholder="Preço" value={form.preco} onChange={handleChange} />
        <input name="estoque" placeholder="Estoque" value={form.estoque} onChange={handleChange} />
        <input name="categoria" placeholder="Categoria" value={form.categoria} onChange={handleChange} />

        <button type="submit">
          {produtoEditando ? "Atualizar" : "Cadastrar"}
        </button>
      </form>

      {loading && <p>⏳ Carregando...</p>}
      {erro && <p>❌ Erro</p>}
      {!loading && produtos.length === 0 && <p>📭 Sem dados</p>}

      <ul>
        {produtos.map(p => (
          <li key={p.id}>
            {p.nome} - R$ {p.preco} - Estoque : {p.estoque} - Categoria : {p.categoria}
            <button onClick={() => editar(p)}>Editar</button>
            <button onClick={() => deletar(p.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
