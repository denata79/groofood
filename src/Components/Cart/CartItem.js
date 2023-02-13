import dataDishes from "../../Data/dataDishes";

const CartItem = ({cartItem}) => {
    console.log({cartItem})
    console.log("tut")
    //const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    // console.log(dishes)
    return(<div>
        {/* * <p>{dishes.name}</p> */}
        {/* {cartItem.quantity} */}
        {/* <p>Цена:{dishes.prise * cartItem.quantity}$</p> */}
      
    </div>)
}

export default CartItem;