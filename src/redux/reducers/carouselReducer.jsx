import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [
        { id: 1, name: 'product 1', price: 1000, quantity: 2, image: 'https://picsum.photos/200/200' }
    ]
}

const carouselReducer = createSlice({
    name: 'carouselReducer',//tên reducer
    initialState, //giá trị default ban đầu
    reducers: {
        addProductAction: (state, action) => {
            const { type, payload } = action;
            const itemCart = state.cart.find(item => item.id == payload.id);
            if (itemCart) {
                itemCart.quantity += 1;
            } else {
                state.cart.push(payload);
            }
            //Tự xử lý imutable
        },
        deleteProductAction: (state,action) => {
            const {payload} = action;
            state.cart = state.cart.filter(item => item.id !== payload);
        },
        changeQuantityProductAction:(state,action) => {
            const {payload} = action;
            let itemCart = state.cart.find(item=>item.id === payload.id);
            if(itemCart) {
                itemCart.quantity += payload.quantity;
            }
        }
    } //hàm xử lý action
});

export const {addProductAction,deleteProductAction, changeQuantityProductAction} = carouselReducer.actions //bóc tách hàm xử lý action

export default carouselReducer.reducer //carouselReducer.reducer chính là reducer của file này