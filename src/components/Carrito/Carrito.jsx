import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h3 className="main-title">Carrito</h3>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <h2>{prod.nombre}</h2>
                        <p>Precio un: ${prod.precio}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        <p>Cant: {prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                <>
                    <h2>Precio Total: ${precioTotal()}</h2>
                    <button onClick={handleVaciar}>Vaciar Carrito</button>
                </>: 
                <h2> El carrito esta vacio</h2>
                

            }
            
        </div>
    )
};

export default Carrito;