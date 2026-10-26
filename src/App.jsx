import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Kitchens from './pages/Kitchens.jsx'
import Materials from './pages/Materials.jsx'
import Projects from './pages/Projects.jsx'
import Wardrobes from './pages/Wardrobes.jsx'
import Design from './pages/Design.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/kitchens" element={<Kitchens />} />
        <Route path="/wardrobes" element={<Wardrobes />} />
        <Route path="/design" element={<Design />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultation" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
