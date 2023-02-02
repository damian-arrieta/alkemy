import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

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
                localStorage.setItem('token', token);
                navigate('/Listado');
            })
    }

  return (
    <>
        <h2>Formulario de login</h2>
        <form onSubmit={submitHandler}>
            <label>
                <span>Correo electronico:</span> <br />
                <input type="email" name="email" />
            </label>
            <br />
            <label>
                <span>Contraseña:</span> <br />
                <input type="password" name="password" />
            </label>
            <br />
            <button type="submit">Ingresar</button>
        </form>
    </>
  )
}
