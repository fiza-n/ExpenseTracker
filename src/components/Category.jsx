
import entertainment from '../assets/entertainment.png';
import fitnessAndHealth from '../assets/fitness-and-health.jpg';
import food from '../assets/food.png';
import groceries from '../assets/groceries.jpg';
import house from '../assets/house.webp';
import savings from '../assets/savings.png';
import shopping from '../assets/shopping.jpg';
import utilities from '../assets/utilities.png';


const Category = ({ title, img, description }) => {

  const Categories = [
      {
          title: 'Entertainment',
          img: entertainment,
          desc: 'Movies, Music, Games, Events'
      },
       {
          title: 'Savings',
          img: savings,
          desc: 'Emergency Fund, Investments, Retirement'
      },
       {
          title: 'Food & Drinks',
          img: food,
          desc: 'Restaurants, Cafes, Beverages'
      },
       {
          title: 'Groceries',
          img: groceries,
          desc: 'Supermarket, Farmers Market, Convenience Store'
      },
       {
          title: 'Shopping',
          img: shopping,
          desc: 'Clothes, Electronics, Gifts'
      },
       {
          title: 'Utilities',
          img: utilities,
          desc: 'Electricity, Water, Internet, Phone'
      },
      {
        title: 'Fitness & Health',    
        img: fitnessAndHealth,
        desc: 'Gym, Yoga, Supplements, Medical'
      }
  ]
  return (
    <div className='rounded-md bg-black-700 flex justify-center items-center flex-col'>
      <div>
        <img src={img} alt={title} />
        <h4>{title}</h4>
      </div>
      <div><p>{description}</p></div>
    </div>
  )
}

export default Category