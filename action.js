export const AddToCart = (product) =>({
    type:'product/add', //Describes the action being performed.
    payload: product  //Contains data needed to update the state.
})

export const RemoveProduct = (id) => ({
    type:'product/remove',
    payload: id,
})

export const IncrementQuantity = (id) => ({
    type: "INCREMENT_QUANTITY",
    payload: id,
  });
  
  export const DecrementQuantity = (id) => ({
    type: "DECREMENT_QUANTITY",
    payload: id,
  });