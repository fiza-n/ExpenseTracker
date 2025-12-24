import entertainment from '../assets/entertainment.png';
import fitnessAndHealth from '../assets/fitness-and-health.jpg';
import food from '../assets/food.png';
import groceries from '../assets/groceries.jpg';
import house from '../assets/house.webp';
import savings from '../assets/savings.png';
import shopping from '../assets/shopping.jpg';
import utilities from '../assets/utilities.png';


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
    }
]
export default Categories;

export {
    entertainment,
    fitnessAndHealth,
    food,
    groceries,
    house,
    savings,
    shopping,
    utilities,
   
};
