import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pathway from '../../Components/Private/Pathway/Pathway';
import ProductDisplay from '../../Components/Private/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../Components/Private/DescriptionBox/DescriptionBox';
import RelatedProducts from '../../Components/Private/RelatedProducts/RelatedProducts';
import { ShopContext } from '../../Context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { allProductData } = useContext(ShopContext);
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductInfo = async () => {
      if (allProductData.length === 0) {
        console.log("Data is still loading or not fetched yet");
        return;
      }

      const product = allProductData.find((product) => product.id === Number(productId));
      setProductInfo(product);
      setLoading(false);
    };

    fetchProductInfo();
  }, [allProductData, productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {productInfo ? (
        <>
          <Pathway product={productInfo} />
          <ProductDisplay product={productInfo} />
          <DescriptionBox product={productInfo} />
          <RelatedProducts product={productInfo} />
        </>
      ) : (
        <p>Product not found!</p>
      )}
    </div>
  );
};

export default Product;
