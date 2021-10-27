import React, {useState} from 'react';
import ProductDisplay from "./ProductDisplay";
import CartDisplay from "./CartDisplay";

const products = [
    {pno:1, pname:'샤프', price:3000},
    {pno:2, pname:'공책', price:1000},
    {pno:3, pname:'지우개', price:700},
    {pno:4, pname:'샤프심', price:500},
    {pno:5, pname:'샤프', price:3000},
]

const cart=[]

const KioskContainer = () =>{

    const [cartState, setCartState] = useState(cart)

    const addCart = (product)=>{
        console.log("addCart....", product)
        setCartState([...cartState, product])
    }

    return(
        <div>
            <ProductDisplay products={products} addCart={addCart}></ProductDisplay>
            <CartDisplay cart={cartState}></CartDisplay>
        </div>
    )
}
export default KioskContainer;