// Lifting state ip - when two components need same data -> move state to common parents

import React from "react";

function Products({name, addToCart}) {
    return (
        <div>
            <h3>{name}</h3>
            <button onClick={() => addToCart(name)}>Add to Cart</button>
        </div>
    );
}

export default Products;