import { useState } from 'react'
import Category from './components/Category'
import Categories from './Constants'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import DetailedExpense from './components/DetailedExpense'


function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className=' bg-gray-900' >
      <Navbar /> 
      <Hero />

     <section className='min-h-screen text-white grid grid-cols-4 gap-4 p-2'>
      {Categories.slice(0, 6).map((category, i) => (
        <div key={`${category.title}-${i}`}>
          <Category
            title={category.title}
            img={category.img}
            description={category.desc}
            amount={category.amount}
            placeholder={category.placeholder}
            onClick={() => setSelected(category)}
          />
        </div>
      ))}
     </section>

     {selected && (
       <div className="fixed inset-0 bg-black/60 z-50 flex items-start pt-10">
          <div className="w-full max-w-4xl mx-auto">
           <DetailedExpense
             title={selected.title}
             img={selected.img}
             placeholder={selected.placeholder || 'e.g. Weekly groceries'}
             onClose={() => setSelected(null)}
           />
         </div>
       </div>
     )}
    </div>
  )
}

export default App
