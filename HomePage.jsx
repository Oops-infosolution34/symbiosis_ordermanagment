import React, { useEffect, useState } from "react";
import {AddToCart} from '../store/action'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()
    const [productData, setProductData] = useState([]) 
    const dispatch = useDispatch() 
    const productState = useSelector(state => state)
    
    const [productCount, setProductCount] = useState(0)

  const fetchProduct = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setProductData(data.products)
    console.log(data.products);
  };
  
  useEffect(() => {
    
  fetchProduct()
  
  setProductCount(productState.products.length)
    
  }, [productState.products.length])
  
  return (
    
    <>
    <button onClick={()=> {
        navigate('/cart')
    }}>cart</button> &nbsp; Product Count : {productCount}

    <table border="1" style={{ width: '80%', textAlign: 'left' }}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Images</th>
                <th>Add to Cart</th>
            </tr>
        </thead>
        <tbody>
            {productData.map((product, index) => {
                return (
                    <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td><img src={product.images[0]} height={100} /></td> 
                        {/* images error remember */}
                        <td><button onClick={()=>{
                            dispatch(AddToCart({
                               id: product.id,
                               name: product.title,
                               price: product.price,
                               category : product.category,
                               image: product.images[0],
                               quantity:1,
                            }))
                        }}>Add</button></td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    </>
);
}

export default HomePage;
