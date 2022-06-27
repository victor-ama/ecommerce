import './cart-item.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../context/cart-context";

export default function CartItem ({cartItem}){
    const {name,quantity,imageUrl,price} = cartItem
    return(
        <div className={'cart-item-container'}>
            <img src={imageUrl} alt-={`${name}`}/>
            <div className={'item-details'}>
                <span className={'name'}>{name}</span>
                <span className={'price'}>{quantity} x ${price}</span>
            </div>

        </div>
    )
}