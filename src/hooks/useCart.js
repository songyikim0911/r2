import {useState} from "react";

//번호 이름 가격 수량qty
const initState = []//초기값

export default() =>{

    const [cart, setCart] = useState(initState)

    const addProduct = p =>{

        const before = cart.filter(item => item.pno === p.pno)[0]//카트내에 제품과 추가하는제품이 같다면, 즉 이미 존재하는것만 filter

        if(before){//before가 존재한다면,
            before.qty = before.qty + 1
            setCart([...cart])
            return
        }else{//존재x->새로 배열추가
            setCart([...cart, {...p, qty:1}])//수량 추가
        }

    }

    const removeProduct = (pno) =>{

        console.log("removeProduct: " +pno)

        const idx = cart.findIndex(item => item.pno === pno)
        console.log("idx:"+idx)

        if(idx > -1){
            cart.splice(idx,1)//선택한것 제외하기
            setCart([...cart])//제외 된 후의 배열을 카트에 다시 뿌려주기
        }

    }

    const getTotal = () => {//카트내에 있는것들을 모두 구해서, 수량만 따로 빼면됨

        let sum = 0

        for(let i = 0; i < cart.length; i++){
            const item = cart[i]
            sum += item.price * item.qty
        }
        return sum

    }


    const clearCart = () =>{
        setCart(initState)
    }


    const changeQty = (pno, amount) =>{

        const target = cart.filter(item => item.pno === pno)[0]//타겟이 존재한다면,

        if(target){
            target.qty = target.qty + amount

            if(target.qty <=0){//qty없을시 제거
                removeProduct(pno)
                return
            }

        }

        setCart([...cart])

    }


    return(//외부에 던져줄 내용
        {cart, addProduct, removeProduct, getTotal, clearCart, changeQty}
    )
}