import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Pathway from '../../Components/Private/Pathway/Pathway';
import ProductDisplay from '../../Components/Private/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../Components/Private/ DescriptionBox/ DescriptionBox';
import RelatedProducts from '../../Components/Private/ RelatedProducts/RelatedProducts';


const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Pathway product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
