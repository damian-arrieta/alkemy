import Login from "./components/Login";
import { Routes, Route } from 'react-router-dom';
import Listado from "./components/Listado";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Listado' element={<Listado />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
