import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
