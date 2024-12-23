import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function Shop() {
    const [fakeStoreAPI, setFakeStoreAPI] = useState([]);


    useEffect(() => {
        fetch(
            "https://fakestoreapi.com/products", 
            {mode: "cors"},
        )
        .then(response => response.json())
        .then(json => setFakeStoreAPI([...json]))
        .catch(error => console.error(error))
    }, []);
    console.log(fakeStoreAPI);
    

    return (
        <>
            <h1>SHOP</h1>
            <ul className="item-grid-container">
                {fakeStoreAPI.map((item) => {
                    return (
                        <>
                        <li className="item-card">
                            <ItemCard 
                            key={item.id} 
                            name={item.title} 
                            price={item.price}
                            image={item.image}
                            description={item.description}
                            />
                        </li>
                        </>
                    );
                })
                }
                {/* use map to spit out <li> */}
                <li>one</li>
                <li>bar</li>
                <li>baz</li>
                
            </ul>
        </>
    )
}

export default Shop;