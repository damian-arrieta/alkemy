import React from 'react';
import swAlert from '@sweetalert/with-react';

export default function Buscador() {

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value;
        if (keyword.length === 0) {
            swAlert(<h5>Tienes que escribir una palabra clave</h5>)
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
