import { useState, useEffect } from "react"

const Category = ({ title, img, description, onClick }) => {
  const [totalSpent, setTotalSpent] = useState(0)

 useEffect(() => {
  const loadTotal = () => {
    try {
      const raw = localStorage.getItem('detailedExpenses')
      if (raw) {
        const allEntries = JSON.parse(raw)
        const total = allEntries
          .filter(entry => entry.category === title)
          .reduce((acc, entry) => acc + Number(entry.amount || 0), 0)
        setTotalSpent(total)
      } else {
        setTotalSpent(0) 
      }
    } catch (e) {
      console.error(e)
    }
  }

  loadTotal()
  window.addEventListener('expensesUpdated', loadTotal)
  return () => window.removeEventListener('expensesUpdated', loadTotal)
}, [title])
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => { if (onClick && (e.key === 'Enter' || e.key === ' ')) onClick() }}
      className='rounded-md bg-gray-950 flex flex-col justify-center p-2 cursor-pointer w-full h-[200px] transition-transform hover:scale-105'
    >
      <div className='flex flex-col gap-2 mb-4 max-sm:items-center max-sm:justify-center mt-2'>
      <div className="flex gap-2">
          <img src={img} alt={title} width={30} height={30} className="rounded-full bg-white" />
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
      <h3 className='mt-4 text-xl text-white'>Rs{totalSpent}</h3>
      </div>
    </div>
  )
}

export default Category