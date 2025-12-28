

const Category = ({ title, img, description, amount, onClick }) => {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => { if (onClick && (e.key === 'Enter' || e.key === ' ')) onClick() }}
      className='rounded-md w-[320px] h-[200px] bg-gray-950 flex justify-center flex-col p-2 cursor-pointer'
    >
      <div className='flex  gap-2 mb-4 mt-2'>
        <img src={img} alt={title} width={30} height={30} className="rounded-full bg-white" />
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
      <h3 className='mt-4 text-xl text-white'>{amount}</h3>
    </div>
  )
}

export default Category