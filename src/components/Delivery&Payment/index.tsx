import React, { useState } from 'react'
import DeliveryInfo from '../DeliveryInfo'
import DeliveryAndPaymentStyled from './Delivery&PaymentStyled'
import Payment from '../Payment'

export default function DeliveryAndPayment() {

    const [showBuyerInfo, setShowBuyerInfo] = useState(false)

 const saveOrderInfo = () => {
        setShowBuyerInfo(true)
    }

    return (
        <DeliveryAndPaymentStyled>
            <div className="nav"><h2>Frakt & Betalsätt</h2></div>
            <DeliveryInfo saveOrderInfo={saveOrderInfo} />
            {showBuyerInfo ? (
                <Payment />
            ) : null}
        </DeliveryAndPaymentStyled>
    )
}