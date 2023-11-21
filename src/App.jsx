import { useState } from 'react'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Header/>  
      <h1>Hola mundo</h1>
      <Footer/>
    
    </div>
  )
}
export default App