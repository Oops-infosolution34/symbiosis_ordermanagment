import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveProduct, IncrementQuantity, DecrementQuantity } from "../store/action";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const grossAmount = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
      <button onClick={() => navigate('/')}>Home</button>
      <h1>Welcome to Cart</h1>
      <table border="1" style={{ width: "80%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Images</th>
            <th>Action</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.category}</td>
                <td>
                  <img src={product.image} alt={product.name} height={100} width={100} />
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(RemoveProduct(product.id));
                    }}
                  >
                    Remove
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => dispatch(DecrementQuantity(product.id))}
                    disabled={product.quantity <= 1} // Disable if quantity is 1
                  >
                    -
                  </button>
                  <span style={{ margin: "0 10px" }}>{product.quantity}</span>
                  <button onClick={() => dispatch(IncrementQuantity(product.id))}>+</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">
                <h1>No products available...</h1>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
      
      <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}>
        Gross Amount: ${grossAmount.toFixed(2)}
      </div>
    </>
  );
};

export default Cart;
