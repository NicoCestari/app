import Item from "../Item/Item";


const ItemList = ({ productos }) => {

    return (
        <div className="container">
            <div className="productos">
                {productos.map((prod) => <Item producto={prod} key={prod.id} />) }
            </div>
        </div>
    )
};

export default ItemList;