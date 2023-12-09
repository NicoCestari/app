import { Link } from "react-router-dom";


const Item = ({ producto }) => {
    
    return (
        <div className="producto">

            <img src={producto.imagen} alt={producto.titulo} />
            <div>
                <h2>{producto.nombre}</h2>
                <p>{producto.categoria}</p>
                <p>${producto.precio}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver mas</Link>
            </div>
        </div>
    )
};

export default Item;