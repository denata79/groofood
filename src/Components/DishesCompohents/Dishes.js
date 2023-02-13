import data from "../../Data/dataDishes";
import Dish from "./Dish";
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/dishesSlice';

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(
    <div>
        {data
        .filter(dish => { 
            if (selectedCategory === "ALL") return true;
            return selectedCategory === dish.category;})
        .map(dish => <Dish dish={dish}/> )}
     
    </div>)
}




// function Dishes () {
//     return(
//         <div></div>
//     )
// }

export default Dishes;