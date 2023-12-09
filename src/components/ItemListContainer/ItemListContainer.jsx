import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/database";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const categoria = useParams().categoria;


    useEffect(() => {

        const productosRef = collection(db, "products");

        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

        getDocs(q)
            .then((resp) => {

                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })

    }, [categoria])



    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
};

export default ItemListContainer;