import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './view/Home';
import { ListarCli } from './view/Cliente/Listar';
import { ListarServ } from './view/Servico/Listar';
import { ListarPed } from './view/Pedido/Listar';
import { Menu } from './components/Menu';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Routes>
          <Route exact path = '/' element={<Home/>}/>
          <Route path = '/listaclientes' element={<ListarCli/>}/>
          <Route path = '/listaservicos' element={<ListarServ/>}/>
          <Route path = '/listapedidos' element={<ListarPed/>}/>
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
