import React from 'react';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

export default function Buscador() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        if (keyword.length < 4) {
            swAlert(<h5>Tienes que escribir una palabra clave</h5>)
        } else {
            e.currentTarget.keyword.value = '';
            navigate(`/Resultados?keyword=${keyword}`);
        }
    }

  return (
    <form className='d-flex align-items-center mx-5' onSubmit={submitHandler}>
        <label className='form-label mb-0 mx-2'>
            <input className='form-control' type="text" name="keyword" placeholder='Buscar' />
        </label>
        <button className='btn btn-light' type="submit">
            <i className="bi bi-search"></i>
        </button>
    </form>
  )
}
