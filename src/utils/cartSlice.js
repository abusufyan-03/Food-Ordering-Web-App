import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const loadCart = () => {
        try {
            const saved = JSON.parse(localStorage.getItem("cart"));
            if (saved === null) return [];
            return saved
        } catch (error) {
            return []
        }
    }
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: loadCart()
    },
    reducers: {
        addItem: (state, action) =>{
            // state.items.push(action.payload);
            const itemId = action.payload.card?.info?.id;
            const existingItem = state.items.find(
                (item) => item.card.info.id === itemId
                
            )
            if(existingItem) {
                console.log(current(state.items))
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        decrementItem: (state, action) =>{
            const itemId = action.payload;
            const index = state.items.findIndex(
                (item) => item.card?.info?.id === itemId
            );
            if(index === -1) return;
            state.items[index].quantity--;

            if(state.items[index].quantity === 0) {
                state.items.splice(index, 1);
            }
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeItem: (state, action) =>{
            state.items = state.items.filter((i) => i.card.info.id !== action.payload)
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        clearItem: (state, action) => {
            state.items.length = 0;
            localStorage.setItem("cart", JSON.stringify(state.items))
        }
    }
})

export const {addItem,decrementItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;