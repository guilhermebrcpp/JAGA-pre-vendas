import Clients from './pages/Clients';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/clientes" element={<Clients/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
