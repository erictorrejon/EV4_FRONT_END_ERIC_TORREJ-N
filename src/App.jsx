import { useState } from 'react'
import CharacterGrid from './components/CharacterGrid'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CharacterGrid searchTerm={searchTerm} />
    </div>
  )
}

export default App
