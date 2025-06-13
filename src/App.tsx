// Libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import { Login } from './features/login/pages/login';
import { Dashboard } from './features/dashboard/pages/dashboard';
import { InfoPokemon } from './features/infoPokemon/pages/InfoPokemon';

// Styles
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pokemonInfo" element={<InfoPokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
