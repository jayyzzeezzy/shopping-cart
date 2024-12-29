import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Cart() {
    const [cartList, setCartList] = useOutletContext();
    const [subtotal, setSubtoal] = useState(0);
    console.log(cartList);

    useEffect(() => {
        if (cartList.length > 0) {
            let tempTotal = cartList.reduce((acc, item) => {
                return acc + item.quantity * item.price;
            }, 0);
            setSubtoal(tempTotal);
        } else {
            setSubtoal(0);
        }
    }, [cartList]);

    function clearAll() {
        setCartList(() => {
            return [];
        })
    }

    return (
        <>
        <div className="shoppingCartWrapper">
            <div>
                <h1>Shopping Cart</h1>
                <button className="clearAll" onClick={()=>clearAll()}>Clear All</button> 
            </div>
            
            <div>
                {cartList.map((item) => {
                    return (
                        <>
                        <div className="shoppingCartItem" key={item.id}>
                            <div className="left">
                                <img src={item.img} alt="" />
                            </div>
                            
                            <div className="right">
                                <h5>{item.name}</h5>
                                <p>{item.quantity}</p>
                                <p>${item.price}</p>
                            </div>

                        </div>
                       
                        </>
                    )
                })}
            </div>
            <div className="subtotal">
                <h4>Subtotal</h4>
                {/* round to two decimal places */}
                <p>${Math.round(subtotal * 100) /100}</p>
            </div>
        </div>
        </>
    );
};

export default Cart;