import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../../Redux/Slices/ProductsSlice'
import { useSelector } from 'react-redux'
import './NewCollections.css'
import Item from '../../Shared/Item/Item'

const NewCollections = () => {
const { products } = useSelector((state) => state.products);
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {products.map((item,i)=>{
            if(item.newCollections===true){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            
        })}
      </div>
    </div>
  )
}

export default NewCollections
