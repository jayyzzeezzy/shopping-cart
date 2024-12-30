import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import styles from "./Shop.module.css";

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
            <h1 className={styles.shopHeading}>SHOP</h1>
            <ul className={styles.itemGridContainer}>
                {fakeStoreAPI.map((item) => {
                    return (
                        <>
                        <li className={styles.itemCard} key={item.id} id={item.id}>
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
                
            </ul>
        </>
    )
}

export default Shop;