import React from "react"
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { idCategory } = useParams()

    useEffect(() => {
        const checkIfIsSomeCategory = idCategory ? getProductsByCategory : getProducts

        checkIfIsSomeCategory(idCategory)
            .then (response => setProducts(response))

    }, [idCategory])


    return (
        <>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer