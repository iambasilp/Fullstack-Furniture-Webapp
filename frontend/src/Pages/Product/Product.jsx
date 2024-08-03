import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Slices/ProductsSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Pathway from '../../Components/Private/Pathway/Pathway';
import ProductDisplay from '../../Components/Private/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../Components/Private/DescriptionBox/DescriptionBox';
import RelatedProducts from '../../Components/Private/RelatedProducts/RelatedProducts';


const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const { products } = useSelector((state) => state.products);
  console.log(products);
  const {productId} = useParams();
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (products && productId) {
  
      const product = products.find((item)=>{
        return item.id === productId
      })
      setProductInfo(product);
      console.log(product);
    }
  }, [products, productId]);

  

  if (!productInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <>
        <Pathway product={productInfo} />
        <ProductDisplay product={productInfo} />
        <DescriptionBox product={productInfo} />
        <RelatedProducts product={productInfo.relatedProducts} />
      </>
    </div>
  );
};

export default Product;
