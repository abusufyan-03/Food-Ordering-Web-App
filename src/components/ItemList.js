import { useState } from "react";
import { CDN_SMALL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrementItem } from "../utils/cartSlice";
import Button from "./Button";
const ItemList = ({ itemIndex, item }) => {

    // console.log(item)

    const disPatch = useDispatch();
    const itemId = item.card.info.id;

    const quantity = useSelector((store)=>{
       const cartItem = store.cart.items.find(
            (item) => 
                item.card.info.id === itemId
            
        )
        return cartItem?.quantity ?? 0;
    })

    const handleAdd = () => {
        disPatch(addItem(item))
    }
    const handleRemove = () =>{
        disPatch(decrementItem(itemId))
    }

    return (
        <>
            <div key={itemIndex} className={`item-card p-4 flex justify-between`}>
                <div className="item-info w-1/2" key={itemIndex}>
                    <div className="name-price flex pr-3">
                        <h3 className="item-name font-semibold mb-2">{item.card.info.name}</h3>
                        <span className="item-price font-semibold">{`₹${(item.card.info.defaultPrice ?? item.card.info.price) / 100}`}</span>
                    </div>
                    <p className="item-description text-sm">{item.card.info.description}</p>
                </div>
                <div className="item-image-container w-32 h-32 relative">
                    <img
                        className="item-image rounded-lg object-cover w-full h-full"
                        src={`${CDN_SMALL}/${item.card.info.imageId}`}
                        alt={item.card.info.name}
                    />
                    <Button
                    quantity={quantity}
                    onAdd={handleAdd}
                    onRemove={handleRemove}
                    />
                </div>
            </div>

        </>
    )
}


export default ItemList;