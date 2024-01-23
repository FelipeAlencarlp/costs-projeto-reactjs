import {  BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </ul>

      <Container customClass="minHeigth">
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/Company" element={<Company />}/> 
          <Route path="/Contact" element={<Contact />}/> 
          <Route path="/NewProject" element={<NewProject />}/>   
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App;
