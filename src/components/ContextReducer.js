import React, { createContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const reducer = (state,action) =>{
    
}

export const CartProvider = ({children})=>  {
    const [state,dispatch] = useReducer();
  return (
    <div>ContextReducer</div>
  )
}
