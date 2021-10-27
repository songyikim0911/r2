import React from 'react';

const CartDisplay = ({cart,remove,getTotal,changeQty}) => {

    const list = cart.map( (item,idx) => <li key={idx}> {item.pno} - {item.pname} -{item.price} -----------
        <button onClick={()=>changeQty(item.pno, -1)}>-</button>{item.qty}<button onClick={()=>changeQty(item.pno, +1)}>+</button>
        <button className="btn btn-primary" onClick={()=>remove(item.pno)}>X</button> </li>)


    return (
        <div>
            <h1>장바구니</h1>
            <ul>
                {list}
            </ul>
            <h3>{getTotal()}</h3>
        </div>
    );
};

export default CartDisplay;