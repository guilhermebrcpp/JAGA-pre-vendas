import Clients from './pages/Clients';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import HomePage from './pages/HomePage';
import { ContactsProvider } from './context/ContactsContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ContactsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/clientes" element={<Clients/>} />
          <Route path="/clientes/novo" element={<AddContact/>} />
          <Route path="/clientes/:id/editar" element={<EditContact/>} />
        </Routes>
      </BrowserRouter>
    </ContactsProvider>
  );
}

export default App;
