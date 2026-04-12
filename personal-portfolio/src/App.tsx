import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { tokens } from './design/tokens'

function App() {
  return (
    <div className={`min-h-screen ${tokens.color.pageBg} ${tokens.color.textPrimary}`}>
      <Header />
      <main className={`${tokens.layout.container} flex flex-col gap-24 pb-16 pt-8`}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
