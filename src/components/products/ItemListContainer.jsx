import { useState, useEffect } from "react";
import ItemList from "./ItemList"

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const [cargando,setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('/datos/productos.json')
      .then(res => {
        if(!res.ok)
          throw new Error("No se pudo cargar productos")

        return res.json()
        })
      .then(datos => setProductos(datos))
      .catch(error => setError(error.message))
      .finally(()=> setCargando(false))
  },[])

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>Ocurrió un error: {error}</p>;

  return <ItemList productos={productos} />
}

export default ItemListContainer;