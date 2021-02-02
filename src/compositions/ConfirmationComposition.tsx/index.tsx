import React from "react";
import ConfirmationCompositionStyled from './ConfirmationCompositionStyled'
import { CartContext } from '../../contexts/cartContext'

interface Props {}

interface State {}

export default class ConfirmationComposition extends React.Component<Props, State>  {
    static context = CartContext

    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    async componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search)
        const sessionId = urlParams.get('session_id')
        try {
            if (sessionId) {
                const response = await fetch('/verify-checkout-session', {
                    headers: { "Content-Type": "application/json" },
                    method: "POST",
                    body: JSON.stringify({ sessionId })
                })
                const session = await response.json()

                if (session.isVerified) {
                    /* this.setState({ showSuccess: true }) */
                    this.makeOrderRequest(sessionId)
                } else {
                    alert('Du måste genomföra betalningen innan din order kan skickas.')
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    async makeOrderRequest(sessionId: any) {
        try {
            const response = await fetch('/order/' + sessionId, {
                headers: { "Content-Type": "application/json" },
                method: "GET",
            })
            console.log(response)
            const orders = await response.json()
            console.log(orders)
            
           /*  let id = orders.sessionId
            this.setState({ orderId: id })

            let items = orders.items
            
            items.map((data: any) => {

                let name = data.description
                let amount = data.price_data.unit_amount / 100
                let quantity = data.quantity

                this.setState({ name: name })
                this.setState({ amount: amount })
                this.setState({ quantity: quantity })

            })

            this.setState({ showOrder: true }) */
            
        } catch (err) {
            console.log(err)
        }
    }
    
    render() {
        return (
            <ConfirmationCompositionStyled>
                <h1>Confirmation</h1>
                <div className="contain">
                    <h1>Confirmation</h1>
                </div>
            </ConfirmationCompositionStyled>
        )
    }
}
