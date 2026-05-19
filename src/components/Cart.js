import { useDispatch, useSelector } from "react-redux";
import { CDN_SMALL } from "../utils/constant";
import ItemList from "./ItemList";
import { clearItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items)
    // console.log(cartItems[0].card.info.id)

    const disPatch = useDispatch();

    const handleClearCart = () =>{
        disPatch(clearItem())
    }

    const handleRemoveCartItem = (id) => {
        disPatch(removeItem(id))
    }
    return(
        <>
        <section className="p-4 mx-auto md:w-lg lg:w-210">
            <h1 className="text-2xl font-bold text-center mb-4">Cart</h1>
            {cartItems.length === 0 && (
                <h2 className="text-center text-2xl">Your cart is empty add item</h2>
            )}
           {cartItems.length !==0 && (
             <button className="py-1.5 px-5 border rounded-lg cursor-pointer hover:bg-black hover:text-white font-semibold" onClick={handleClearCart}>Clear Cart</button>
           )}

            {cartItems.map((item, itemIndex)=>(
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
                    onClick={() =>handleRemoveCartItem(item.card.info.id)}>
                        remove
                    </button>
                            </div>
                        </div>
            ))}
        </section>
        </>
    )
}

export default Cart;