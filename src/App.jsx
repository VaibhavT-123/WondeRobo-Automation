import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import TrustedBy from './Components/TrustedBy/TrustedBy';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/ContactForm';
import Footer from './Components/Footer/Footer';
import './App.css'


function App() {

  return (
    <div className='main-container'>
        <Header />
        <Hero />
        <About />
        <TrustedBy />
        <Services />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
             