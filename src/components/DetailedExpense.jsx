import React, { useEffect, useState } from 'react'

const DetailedExpense = ({ title, img, onClose , placeholder}) => {
  const [allEntries, setAllEntries] = useState([])
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')
const [loaded, setLoaded] = useState(false)


useEffect(() => {
  try {
    const raw = localStorage.getItem('detailedExpenses')
    if (raw) setAllEntries(JSON.parse(raw))
  } catch (e) {
    console.error(e)
  } finally {
    setLoaded(true) 
  }
}, [])


useEffect(() => {
  if (!loaded) return
  localStorage.setItem('detailedExpenses', JSON.stringify(allEntries))
  window.dispatchEvent(new Event('expensesUpdated')) 
}, [allEntries, loaded])
 
  const entries = allEntries.filter(entry => entry.category === title)

  const resetForm = () => {
    setName('')
    setDate('')
    setAmount('')
  }
  

  const handleAdd = (e) => {
    e.preventDefault()
    if (!name.trim()) return alert('Please enter a name for the expense')
    if (!date) return alert('Please pick a date')
    const numeric = parseFloat(amount)
    if (Number.isNaN(numeric) || numeric <= 0) return alert('Please enter a valid amount')

    const item = {
      id: Date.now(),
      name: name.trim(),
      date,
      amount: +numeric,
      category: title
    }
    setAllEntries((s) => [item, ...s])
    resetForm()
  }

  const handleDelete = (id) => {
    if (!confirm('Delete this entry?')) return
    setAllEntries((s) => s.filter((it) => it.id !== id))

  }

  const totalSpent = entries.reduce((acc, e) => acc + Number(e.amount || 0), 0)

  const spentThisMonth = (() => {
    const now = new Date()
    return entries.reduce((acc, e) => {
      const d = new Date(e.date)
      if (d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()) {
        return acc + Number(e.amount || 0)
      }
      return acc
    }, 0)
  })()

  return (
    <section className="min-h-screen p-6 text-white">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg p-6 relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-300 bg-gray-800 hover:bg-gray-700 p-2 rounded"
            aria-label="Close detailed view"
          >
            ✕
          </button>
        )}
        <div className="flex items-center gap-4 mb-6">
          {img && <img src={img} alt={title} width={80} height={80} className="rounded-md" />}
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className="flex gap-6 mt-2 text-sm text-gray-300">
              <div>
                <div className="text-xs text-gray-400">Spent This Month</div>
                <div className="font-semibold">${spentThisMonth.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Total Spent</div>
                <div className="font-semibold">${totalSpent.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="col-span-1 md:col-span-1">
            <label className="text-sm text-gray-300">Name</label>
            <input
              className="w-full mt-1 p-2 rounded bg-gray-800 text-white border border-gray-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={placeholder}
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Date</label>
            <input
              type="date"
              className="w-full mt-1 p-2 rounded bg-gray-800 text-white border border-gray-700"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Amount</label>
            <div className="flex gap-2 mt-1">
              <span className="inline-flex items-center px-3 rounded-l bg-gray-800 border border-r-0 border-gray-700">$</span>
              <input
                type="number"
                step="0.01"
                className="w-full p-2 rounded-r bg-gray-800 text-white border border-gray-700"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="md:col-span-3 flex justify-end mt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
            >
              Add Expense
            </button>
          </div>
        </form>

        <div>
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead className="text-gray-400 text-sm border-b border-gray-800">
                <tr>
                  <th className="py-3 px-2">Date</th>
                  <th className="py-3 px-2">Name</th>
                  <th className="py-3 px-2">Amount</th>
                  <th className="py-3 px-2">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {entries.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-6 text-center text-gray-400">No expenses yet</td>
                  </tr>
                ) : (
                  entries.map((e) => (
                    <tr key={e.id} className="border-b border-gray-800">
                      <td className="py-3 px-2 align-top text-sm text-gray-300">{new Date(e.date).toLocaleDateString()}</td>
                      <td className="py-3 px-2 align-top text-sm">{e.name}</td>
                      <td className="py-3 px-2 align-top text-sm">${Number(e.amount).toFixed(2)}</td>
                      <td className="py-3 px-2 align-top text-sm">
                        <button
                          onClick={() => handleDelete(e.id)}
                          className="text-red-400 hover:text-red-600 text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailedExpense