import "./styles.css";
import { useContext } from "react";
import { CartContext, useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



const Carrito = () => {

    const { eliminarProducto } = useCart();
    const { carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    const handleEliminar = (prod) => {
        eliminarProducto(prod);
    }

    return (
        <div className="container">
            <h3 className="main-title">Carrito</h3>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <h2>{prod.nombre}</h2>
                        <img src={`${prod.imagen}`} className="imagen" alt={prod.nombre}></img>
                        <p>Descripción: {prod.descripcion}</p>
                        <p>Precio un: ${prod.precio}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        <p>Cant: {prod.cantidad}</p>
                        <br />
                        <Button onClick={() => handleEliminar(prod)}>Eliminar producto</Button>
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                <>
                    <h2>Precio Total: ${precioTotal()}</h2>
                    <button onClick={handleVaciar}>Vaciar Carrito</button>
                    <br />
                    <br />
                    <Link to="/checkout">Finalizar Compra</Link>
                </>: 
                <h2> El carrito esta vacio</h2>
                

            }
            
        </div>
    )
};

export default Carrito;