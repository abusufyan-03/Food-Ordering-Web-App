import { useDispatch, useSelector } from "react-redux";
import { CDN_SMALL } from "../utils/constant";
import { clearItem, addItem, decrementItem } from "../utils/cartSlice";
import Button from "./Button";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items)

    const disPatch = useDispatch();

    const handleClearCart = () =>{
        disPatch(clearItem())
    }

    const handleAdd = (item) => {
            disPatch(addItem(item))
        }
        const handleRemove = (itemId) =>{
            disPatch(decrementItem(itemId))
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

            {cartItems.map((item)=>(
                <div key={item.card.info.id} className={`item-card p-4 flex justify-between`}>
                            <div className="item-info w-2/3">
                                <div className="name-price flex justify-between pr-3">
                                    <h3 className="item-name font-semibold mb-2">{item.card.info.name}</h3>
                                    <span className="item-price font-semibold">{`₹${item.quantity*((item.card.info.defaultPrice  ?? item.card.info.price )/100)}`}</span>
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
                    quantity={item.quantity}
                    onAdd={() => handleAdd(item)}
                    onRemove={() => handleRemove(item.card.info.id)}
                    />
                            </div>
                        </div>
            ))}
        </section>
        </>
    )
}

export default Cart;