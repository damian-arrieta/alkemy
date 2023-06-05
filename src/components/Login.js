//Libraries
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate, Navigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email === '' || password === '') {
            swAlert(<h3>Los campos no pueden estar vacios</h3>);
            return;
        }

        if(email !== '' && !regexEmail.test(email)) {
            swAlert(<h3>Debes escribir una direccion de correo electronico valida</h3>);
            return;
        }

        if(email === 'challenge@alkemy.org' && password !== 'react') {
            swAlert(<h3>Credenciales invalidas</h3>);
            return;
        }

        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                swAlert(<h3>Perfecto, ingresaste correctamente</h3>);
                const token = res.data.token;
                sessionStorage.setItem('token', token);
                navigate('/Listado');
            })
    }

    let token = sessionStorage.getItem('token');

  return (
    <>
        { token && <Navigate to='/listado' /> }

        <div className="row">
            <div className="col-6 offset-3">
                <h2>Formulario de login</h2>
                <form onSubmit={submitHandler}>
                    <label className='form-label d-block mt-2'>
                        <span>Correo Electrónico:</span>
                        <br />
                        <input className='form-control' type="text" name='email' />
                    </label>
                    <label className='form-label d-block mt-2'>
                        <span>Contraseña:</span>
                        <br />
                        <input className='form-control' type="password" name='password' />
                    </label>
                    <span>Email: challenge@alkemy.org / Password: react</span>
                    <br />
                    <button className='btn btn-info mt-2' type='submit'>Ingresar</button>
                </form>
            </div>
        </div>
    </>
  )
}
