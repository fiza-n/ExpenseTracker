import entertainment from './assets';
import fitnessAndHealth from './assets';
import food from './assets';
import groceries from './assets';
import house from './assets';
import savings from './assets';
import shopping from './assets';
import utilities from '.assets';



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
    reactLogo,
};
