import { useState, useEffect } from "react";

function Shop() {
    const [fakeStoreAPI, setFakeStoreAPI] = useState('');


    useEffect(() => {
        fetch(
            "https://fakestoreapi.com/products", 
            {mode: "cors"},
        )
        .then(response => response.json())
        .then(json => setFakeStoreAPI(json))
        .catch(error => console.error(error))
    }, []);
    console.log(fakeStoreAPI);
    

    return (
        <>
            <h1>SHOP</h1>
        </>
    )
}

export default Shop;