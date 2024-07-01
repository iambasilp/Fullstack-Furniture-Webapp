import React, { useContext, useEffect } from 'react';
import './ProductDisplay.css';
import { BsFillStarFill, BsStar } from "react-icons/bs";
import ScrollReveal from 'scrollreveal';
import { ShopContext } from '../../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    useEffect(() => {
        // Initialize ScrollReveal for productdisplay-left
        ScrollReveal().reveal('.productdisplay-left', {
            duration: 1000,
            origin: 'left',
            distance: '20px',
            delay: 300,
            easing: 'ease',
        });

        // Initialize ScrollReveal for productdisplay-right
        ScrollReveal().reveal('.productdisplay-right', {
            duration: 1000,
            origin: 'right',
            distance: '20px',
            delay: 300,
            easing: 'ease',
        });
    }, []);

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <BsFillStarFill size={25} />
                    <BsFillStarFill size={25} />
                    <BsFillStarFill size={25} />
                    <BsFillStarFill size={25} />
                    <BsStar size={25} />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with
                    a round neckline and short sleeves, worn as an undershirt or outer
                    garment.
                </div>

                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span> Women , T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
