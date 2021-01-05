import React from 'react'
import ProductCardStyled from './ProductCardStyled'

interface Props {
    name: string
}

export default function ProductCard(props: Props) {

    return (
        <ProductCardStyled>
            <h1>{props.name}</h1>
        </ProductCardStyled>
    )
}