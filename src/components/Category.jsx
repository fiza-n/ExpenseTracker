

const Category = ({ title, img, description }) => {


  return (
    <div className='rounded-md w-[320px] h-[200px] bg-gray-950 flex justify-center flex-col p-2'>
      <div className='flex  gap-2 mb-4 mt-2'>
        <img src={img} alt={title} width={30} height={30} className="rounded-full bg-white" />
        <h4>{title}</h4>
      </div>
      <div><p>{description}</p></div>
    </div>
  )
}

export default Category