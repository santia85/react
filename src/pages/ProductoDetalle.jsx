import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import estilos from "./Producto.module.css";

// Esta es la vista que se muestra en la ruta "/producto/:id"
const ProductoDetalle = () => {
  // useParams() lee los parámetros dinámicos definidos en la ruta.
  // Como la ruta se define como "/producto/:id", acá podemos leer "id".
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("/datos/productos.json")
      .then((res) => res.json())
      .then((datos) => {
        // Buscamos, dentro de todos los productos, el que tenga el id de la URL.
        // El id de la URL siempre es un string, por eso comparamos con String(producto.id)
        const encontrado = datos.find((p) => String(p.id) === id);
        setProducto(encontrado);
      })
      .finally(() => setCargando(false));
  }, [id]); // se vuelve a ejecutar si cambia el id (ej: pasás de /producto/1 a /producto/2)

  if (cargando) return <p>Cargando producto...</p>;
  if (!producto) return <p>No se encontró el producto.</p>;
  return (
    <div>
      <h1>{producto.nombre}</h1>
      <img className={estilos.size} src={producto.imagen} alt={producto.nombre} />
      <p>Precio: AR${producto.precio}</p>
      <p>Stock disponible: {producto.stock}</p>
    </div>
  );
};

export default ProductoDetalle;
