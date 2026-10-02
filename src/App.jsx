import Clients from './pages/Clients';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import { ContactsProvider } from './context/ContactsContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chamados from './pages/Chamados';

function App() {
  return (
    <ContactsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/clientes" element={<Clients/>} />
          <Route path="/projetos" element={<Projects/>} />
          <Route path="/chamados" element={<Chamados/>} />
          <Route path="/clientes/novo" element={<AddContact/>} />
          <Route path="/clientes/:id/editar" element={<EditContact/>} />
        </Routes>
      </BrowserRouter>
    </ContactsProvider>
  );
}

export default App;
