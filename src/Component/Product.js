import React from 'react'
import '../Style/Product.css';
function Product({title,price,stars,image}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>￥</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(stars).fill().map((_,i)=>{
                        <p>🌟</p>
                    })}
                </div>
            </div>
            <img src={image} />
                <button>カートに追加</button>
        </div>
    )
}

export default Product 
