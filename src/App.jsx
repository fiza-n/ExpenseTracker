import { useState } from 'react'
import Category from './components/Category'
import Categories from './Constants'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-gray-900' >
      <Navbar /> 
      <Hero />
     <section className='min-h-screen text-white grid grid-cols-4 grid-rows-2 gap-0 p-2'>
      {Array.from({ length: 6 }).map((_, i) => {
  const category = Categories[i % Categories.length];
  return (
    <Category
      key={`${category.title}-${i}`}
      title={category.title}
      img={category.img}
      description={category.desc}
    />
  );
})}
        </section>
    </div>
  )
}


export default App
