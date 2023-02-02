import Login from "./components/Login";
import { Routes, Route } from 'react-router-dom';
import Listado from "./components/Listado";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Listado' element={<Listado />} />
      </Routes>
    </>
  );
}

export default App;
