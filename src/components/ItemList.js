import { useState } from "react";
import { CDN_SMALL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ itemIndex, item }) => {


    const disPatch = useDispatch();

    const handleCart = (item) => {
        disPatch(addItem(item))
    }

    return (
        <>
            <div key={itemIndex} className={`item-card p-4 flex justify-between`}>
                <div className="item-info w-1/2" key={itemIndex}>
                    <div className="name-price flex pr-3">
                        <h3 className="item-name font-semibold mb-2">{item.card.info.name}</h3>
                        <span className="item-price font-semibold">{`₹${item.card.info.defaultPrice / 100}`}</span>
                    </div>
                    <p className="item-description text-sm">{item.card.info.description}</p>
                </div>
                <div className="item-image-container w-32 h-32 relative">
                    <img
                        className="item-image rounded-lg object-cover w-full h-full"
                        src={`${CDN_SMALL}/${item.card.info.imageId}`}
                        alt={item.card.info.name}
                    />
                    <button className="absolute bottom-2 left-1/2 -translate-x-1/2 font-semibold bg-white text-green-600 border-0 px-4 py-1 rounded-lg shadow-sm text-sm cursor-pointer"
                    onClick={() => handleCart(item)}>
                        Add+
                    </button>
                </div>
            </div>

        </>
    )
}


export default ItemList;