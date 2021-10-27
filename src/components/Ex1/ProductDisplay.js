import React from 'react';

const ProductDisplay = ({products, addCart}) => {

   // const list = products.map((p)=><li></li>) 람다식,, (p)를 아래와같이 줄여서 쓸 수 있다.
    const list = products.map(p =><li key={p.pno} onClick={()=> addCart(p)}>{p.name} --- {p.price}</li>)

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    This is some text within a card body.
                </div>
                <div className="card-body">
                    This is some text within a card body.
                </div>
                <div className="card-footer">
                    This is some text within a card body.
                </div>
            </div>
            <h1>상품목록</h1>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default ProductDisplay;