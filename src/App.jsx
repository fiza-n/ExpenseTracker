import { useState } from 'react'
import Category from './components/Category'
import Categories from './Constants'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => {
        const category = Categories[i % Categories.length]
        return (
          <Category />
        )
      })}
    </>
  )
}

export default App
