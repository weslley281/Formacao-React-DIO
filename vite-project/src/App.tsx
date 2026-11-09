import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Profile } from './components/Profile'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
      </main>
      <Footer />
    </div>
  )
}

export default App
