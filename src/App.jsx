import { Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop"
import { Home, Contact, Accessibilite, MentionsLegales, Error404 } from './pages';

function App() {
  return (
    <>
      <nav role="navigation" aria-label="Accès rapide">
        <a href="#main" className="skiplink">Contenu</a>
      </nav>
      <Header />
      <main role="main" id="main" tabIndex="-1">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessibilite" element={<Accessibilite />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App