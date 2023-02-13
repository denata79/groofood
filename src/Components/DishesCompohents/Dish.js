import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import CangeQuantity from "../Cart/CangeQuantity";


const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const disaptch = useDispatch()
return(<div >
    <img src={`./${dish.img}.jpeg`} alt='foto'/>
    <h2>{dish.name}</h2>
    <p>$ {dish.price}</p>
    <p>выберите количество порций</p>
    <CangeQuantity quantity={quantity} setQuantity={setQuantity}/>
    <button onClick={() => {disaptch(addItemToCart({dish, quantity}));
    }}>Добавить в корзину</button>

</div>)
}

export default Dish;