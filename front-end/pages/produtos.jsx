import { useEffect, useState } from "react";
import {
  getProdutos,
  criarProduto,
  atualizarProduto,
  deletarProduto
} from "../src/services/prodService";

import style from "./Produtos.module.css";
import { toast } from "react-toastify";

function Produtos() {
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
    toast.error("Erro ao carregar produtos!");
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

  try {
    await deletarProduto(id);
    toast.success("Produto deletado com sucesso!");
    carregarProdutos();
  } catch {
    toast.error("Erro ao deletar produto!");
  }
}

async function handleSubmit(e) {
  e.preventDefault();

  if (!form.nome || !form.preco || !form.estoque || !form.categoria) {
    toast.warning("Preencha todos os campos!");
    return;
  }

  try {
    if (produtoEditando) {
      await atualizarProduto(produtoEditando.id, form);
      toast.info("Produto atualizado!");
    } else {
      await criarProduto(form);
      toast.success("Produto cadastrado!");
    }

    setForm({ nome: "", preco: "", estoque: "", categoria: "" });
    setProdutoEditando(null);
    carregarProdutos();

  } catch {
    toast.error("Erro ao salvar produto!");
  }
}

  return (
    <div className={style.container}>
      <h1 className={style.title}>Produtos</h1>

      <form className={style.form} onSubmit={handleSubmit}>
        <input className={style.input} name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
        <input className={style.input} name="preco" placeholder="Preço" value={form.preco} onChange={handleChange} />
        <input className={style.input} name="estoque" placeholder="Estoque" value={form.estoque} onChange={handleChange} />
        <input className={style.input} name="categoria" placeholder="Categoria" value={form.categoria} onChange={handleChange} />

        <button className={style.btnup} type="submit">
          {produtoEditando ? "Atualizar" : "Cadastrar"}
        </button>
      </form>

      {loading && <p className={style.msg}>⏳ Carregando...</p>}
      {erro && <p className={style.msg}>❌ Erro</p>}
      {!loading && produtos.length === 0 && <p className={style.msg}>📭 Sem dados</p>}

      <ul className={style.lista}>
        {produtos.map(p => (
          <li key={p.id} className={style.item}>
            <div className={style.span}>
              {p.nome} | R$ {p.preco} | Estoque: {p.estoque} | {p.categoria}
            </div>

            <div className={style.acoes}>
              <button className={style.btn} onClick={() => editar(p)}>✏️ Editar</button>
              <button className={style.btn} onClick={() => deletar(p.id)}>🗑️ Deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
