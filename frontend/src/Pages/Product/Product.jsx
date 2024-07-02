import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pathway from '../../Components/Private/Pathway/Pathway';
import ProductDisplay from '../../Components/Private/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../Components/Private/DescriptionBox/DescriptionBox';
import RelatedProducts from '../../Components/Private/RelatedProducts/RelatedProducts';
import { ShopContext } from '../../Context/ShopContext';

const Product = () => {
  const {productId} = useParams();
  const { AllProductData } = useContext(ShopContext);
  const [productInfo, setProductInfo] = useState(null);
console.log(AllProductData);
  useEffect(() => {
    if (AllProductData && productId) {
  
      const product = AllProductData.find((item)=>{
        return item.id === productId
      })
      setProductInfo(product);
      console.log(product);
    }
  }, [AllProductData, productId]);

  

  if (!productInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <>
        <Pathway product={productInfo} />
        <ProductDisplay product={productInfo} />
        <DescriptionBox product={productInfo} />
        <RelatedProducts product={productInfo} />
      </>
    </div>
  );
};

export default Product;
