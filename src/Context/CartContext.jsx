import { createContext, useEffect, useState, useContext } from "react";


export const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error();
    }
    return context;
};

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);


    const [productos, setProductos] = useState([]);

    const [productosEliminados, setProductosEliminados] = useState([]);

    const eliminarProducto = (prod) => {
        const productosFiltrados = productos.filter(producto => producto.id !== prod.id);
        setProductos(productosFiltrados);

        setProductosEliminados([...productosEliminados, prod]);

        actualizarCarrito();
    };

    const actualizarCarrito = () => {
        const carritoActualizado = carrito.filter(producto => !productosEliminados.includes(producto));
        setCarrito(carritoActualizado);
    };

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];

        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);

    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }


    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            cantidadEnCarrito,
            precioTotal,
            vaciarCarrito,
            eliminarProducto,
            actualizarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
};

