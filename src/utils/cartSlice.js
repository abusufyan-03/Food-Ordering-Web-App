import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
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
                console.log(current(state.items))
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                })
            }
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
        },
        removeItem: (state, action) =>{
            state.items = state.items.filter((i) => i.card.info.id !== action.payload)
        },
        clearItem: (state, action) => {
            state.items.length = 0;
        }
    }
})

export const {addItem,decrementItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;