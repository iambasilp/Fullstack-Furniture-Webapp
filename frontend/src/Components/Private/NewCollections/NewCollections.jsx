import React, { useContext } from 'react'
import './NewCollections.css'
import Item from '../../Shared/Item/Item'
import { ProductContext } from '../../../Context/ProductContext'

const NewCollections = () => {
    const {AllProductData} = useContext(ProductContext)
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {AllProductData.map((item,i)=>{
            if(item.newCollections===true){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            
        })}
      </div>
    </div>
  )
}

export default NewCollections
