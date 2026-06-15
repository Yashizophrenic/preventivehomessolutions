import TopBar from './components/TopBar.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MarqueeBanner from './components/MarqueeBanner.jsx'
import Services from './components/Services.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import BeforeAfter from './components/BeforeAfter.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Process from './components/Process.jsx'
import About from './components/About.jsx'
<<<<<<< HEAD
import Testimonials from './components/Testimonials.jsx'
=======
>>>>>>> 586b25297a4c5b1201b9510cd6f45178c2c70b8c
import AreasWeServe from './components/AreasWeServe.jsx'
import Faq from './components/Faq.jsx'
import Blog from './components/Blog.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

<<<<<<< HEAD
=======

>>>>>>> 586b25297a4c5b1201b9510cd6f45178c2c70b8c
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Hero />
      <MarqueeBanner />
      <Services />
      <WhyChoose />
      <BeforeAfter />
<<<<<<< HEAD
      <div
        className="relative bg-phsSky"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundAttachment: 'fixed',
        }}
      >
=======

      {/* Shared band: CtaBanner + Process + About */}
      <div className="bg-phsSky">
>>>>>>> 586b25297a4c5b1201b9510cd6f45178c2c70b8c
        <CtaBanner />
        <Process />
        <About />
      </div>
<<<<<<< HEAD
      <Testimonials />
      <div className="h-6 w-full bg-phsSky" />
=======

>>>>>>> 586b25297a4c5b1201b9510cd6f45178c2c70b8c
      <AreasWeServe />
      <Faq />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  )
}
