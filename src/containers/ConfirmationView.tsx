import React, { useContext } from 'react'
import {CartContext} from '../contexts/cartContext'

export default function ConfirmationView() {

    const context = useContext(CartContext)
    return (
        <div>
            {console.log(context.cartItems, context.orderInfo)}
            <h1>ConfirmationView</h1>
        </div>
    )
}