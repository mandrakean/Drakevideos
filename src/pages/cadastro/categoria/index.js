import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ff0000',
  }
  const[categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais);

    
  function setValue(chave, valor) {

    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value
    );
  }
  
    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
        }}>

          <FormField
            label='Nome da categoria'
            type='ctext'
            name='nome'
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label='Descrição'
            tag='textarea'
            type='description'
            name='descricao'
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label='Cor'
            tag='input'
            type='color'
            name='cor'
            value={values.cor}
            onChange={handleChange}
          />

            <button>
                Cadastrar
            </button>
        </form>
        
        <ul>
          {categorias.map((categoria, indice) => {
            return (
            <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to='/'>
          Ir para Home
        </Link>

      </PageDefault>
    )
  }

  export default CadastroCategoria;