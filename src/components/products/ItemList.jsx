import Item from "./Item";
import estilos from "./ItemList.module.css";

const ItemList = ({productos}) => {
  return(
    <div className={estilos.grid}>
      {productos.map(producto => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
}

export default ItemList
