import React from 'react'
import DeliveryInfo from '../DeliveryInfo'
import DeliveryAndPaymentStyled from './Delivery&PaymentStyled'

export default function DeliveryAndPayment() {

    return (
        <DeliveryAndPaymentStyled>
            <div className="nav"><h2>Frakt & Betalsätt</h2></div>
            <DeliveryInfo />
        </DeliveryAndPaymentStyled>
    )
}