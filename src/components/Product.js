import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Product({product}) {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/products/${product._id}`}>
                <Card.Img src={product.image}/>
            </a>

        <Card.Body>
            <a href={`/products/${product._id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </a>

            <Card.Text as="div">
                <div className="my-3">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={"#dbd21d"}/>
                </div>
            </Card.Text>

            <Card.Text as="h3">
            <p>&#8377;{product.price}</p>
            </Card.Text>
        </Card.Body>

        </Card>
    )
}

export default Product