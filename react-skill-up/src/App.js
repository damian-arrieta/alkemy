//Libraries
import { Routes, Route } from 'react-router-dom';

//Components
import Listado from "./components/Listado";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from "./components/Login";
import Detalle from "./components/Detalle";

function App() {
  return (
    <>
      <Header />

      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Listado' element={<Listado />} />
          <Route path='/Detalle' element={<Detalle />} />
        </Routes>
      </div>
        
        <Footer/>
    </>
  );
}

export default App;
