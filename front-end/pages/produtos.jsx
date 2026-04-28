import './produtos.module.css'
function Produtos() {
  return (
    <div>
      <header>
        <div className="container-header">
          <h1>📋 Gerenciador de Produtos</h1>
          <p className="subtitle">Aplicação de Gestão de Produtos</p>
          <ul>
            <li><a href="./home.jsx">Home</a></li>
            <li><a href="./equipe.jsx">Equipe</a></li>
          </ul>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main>
        <div className="container">
          
          {/* Formulário */}
          <section className="form-section">
            <h2>Adicionar ou Editar Produto</h2>

            <form id="productsForm">
              <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite o nome do produto"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="preco">Preço:</label>
                <input
                  type="text"
                  id="preco"
                  name="preco"
                  placeholder="R$:"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="estoque">Estoque:</label>
                <input
                  type="number"
                  id="estoque"
                  name="estoque"
                  placeholder="Digite a quantidade de estoque do produto:"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="categoria">Categoria:</label>
                <input
                  type="text"
                  id="categoria"
                  name="categoria"
                  placeholder="Digite em qual categoria este produto pertence:"
                  required
                />
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">
                  Salvar Produto
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  id="btnLimpar"
                >
                  Limpar Formulário
                </button>
              </div>
            </form>
          </section>

          {/* Lista */}
          <section className="list-section">
            <h2>Lista de Produtos</h2>

            <div className="list-controls">
              <button className="btn btn-success" id="btnRecarregar">
                🔃 Recarregar Lista
              </button>

              <div className="search-box">
                <select id="searchType" title="Selecionar tipo de busca">
                  <option value="nome">Buscar por Categoria</option>
                  <option value="id">Buscar por ID</option>
                </select>

                <input
                  type="text"
                  id="searchInput"
                  placeholder="Digite o valor para buscar..."
                />

                <button className="btn btn-primary" id="btnBuscar">
                  Buscar
                </button>
              </div>
            </div>

            <div id="loadingMessage" className="message message-info">
              Carregando produtos...
            </div>

            <div id="emptyMessage" className="message message-info">
              Nenhum produto cadastrado. Adicione um novo produto usando o formulário acima.
            </div>

            <div id="productsList" className="products-table-container">
              {/* Tabela será preenchida via JavaScript */}
            </div>
          </section>
        </div>
      </main>

      {/* Modal */}
      <div id="modalMessage" className="modal-message">
        <div className="modal-content">
          <p id="modalText"></p>
          <button className="btn btn-primary">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Produtos