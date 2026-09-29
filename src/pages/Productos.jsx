import ItemListContainer from "../components/products/ItemListContainer";

// Esta es la vista que se muestra en la ruta "/productos"
const Productos = () => {
  return (
    <div>
      <h1>Nuestras historietas</h1>
      <ItemListContainer />
    </div>
  );
};

export default Productos;
