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
        desc: 'Movies, Music, Games, Events',
        placeholder:'e.g. Movie night tickets'
    },
     {
        title: 'Savings',
        img: savings,
        desc: 'Emergency Fund, Investments, Retirement',
        placeholder:'e.g. Monthly savings deposit'
    },
    
     {
        title: 'Food & Drinks',
        img: food,
        desc: 'Restaurants, Cafes, Beverages',
        placeholder:'e.g. Dinner at Italian Bistro'
    },
     {
        title: 'Groceries',
        img: groceries,
        desc: 'Supermarket, Farmers Market, Convenience Store',
        placeholder:'e.g. Weekly grocery shopping'
    },
     {
        title: 'Shopping',
        img: shopping,
        desc: 'Clothes, Electronics, Gifts',
        placeholder:'e.g. New headphones'
    },
     {
        title: 'Utilities',
        img: utilities,
        desc: 'Electricity, Water, Internet, Phone',
        placeholder:'e.g. Monthly internet bill'
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
