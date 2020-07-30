import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Página de cadastro de categorias</h1>

      <form>
        <label>
          Nome da categoria:
          <input type="text"/>
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
    )
}

export default CadastroCategoria;