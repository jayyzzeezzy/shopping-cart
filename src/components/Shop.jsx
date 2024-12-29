import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function Shop() {
    const [fakeStoreAPI, setFakeStoreAPI] = useState([]);

    async function getFakeStoreAPI() {
        try {
            const response = await fetch(
                "https://fakestoreapi.com/products", 
                {mode: "cors"},
            );
            const fetchResult = await response.json();
            console.log(fetchResult);
            setFakeStoreAPI(fetchResult);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getFakeStoreAPI();
    }, []);
    

    return (
        <>
            <h1>SHOP</h1>
            <ul className="item-grid-container">
                {fakeStoreAPI.map((item) => {
                    return (
                        <>
                        <li className="item-card" key={item.id} id={item.id}>
                            {/* pass item info via props */}
                            <ItemCard 
                            id={item.id} 
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