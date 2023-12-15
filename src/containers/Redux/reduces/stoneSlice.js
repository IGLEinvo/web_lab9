import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stoneItems: [],
    stoneTotalQuantity: 0,
};

const stoneSlice = createSlice({
    name: "stone",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.stoneItems.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.stoneItems[itemIndex].stoneQuantity += action.payload.stoneQuantity;
            } else {
                const temp = { ...action.payload, stoneQuantity: action.payload.stoneQuantity };
                state.stoneItems.push(temp);
            }

            state.stoneTotalQuantity += action.payload.stoneQuantity;
        },
        incrementQuantity(state, action) {
            const stoneId = action.payload;
            const stoneItem = state.stoneItems.find((item) => item.id === stoneId);

            if (stoneItem) {
                stoneItem.stoneQuantity += 1;
                state.stoneTotalQuantity += 1;
            }
        },

        decrementQuantity(state, action) {
            const stoneId = action.payload;
            const stoneItem = state.stoneItems.find((item) => item.id === stoneId);

            if (stoneItem && stoneItem.stoneQuantity > 0) {
                stoneItem.stoneQuantity -= 1;
                state.stoneTotalQuantity -= 1;

                if (stoneItem.stoneQuantity === 0) {
                    state.stoneItems = state.stoneItems.filter((item) => item.id !== stoneId);
                }
            }
        },
    },
});

export const { addToCart, incrementQuantity, decrementQuantity } = stoneSlice.actions;
export default stoneSlice.reducer;
