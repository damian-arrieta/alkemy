//Libraries
import { Routes, Route } from 'react-router-dom';

//Components
import Listado from "./components/Listado";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from "./components/Login";

//Styles
import './css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Listado' element={<Listado />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
