
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import {BrowerRouter as Router , Routes , Route} from 'react-router-dom' 
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Skills from './Pages/Skills.jsx'
import Works from './Pages/Works.jsx'
import Contact from './Pages/Contact.jsx'


function App() {

  return (
    <Router>
    <Navbar/>

    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/skills' element = {<Skills/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/contact' element = {<Contact/>} />
      <Route path='/works' element = {<Works/>} />
    </Routes>
    <Footer/>
    </Router>
  )
}

export default App
