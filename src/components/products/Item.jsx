import { useState } from "react"
import { Link } from "react-router-dom"
import BotonFavorito from "../BotonFavorito"
import estilos from "./Item.module.css"

const Item = ({id, nombre, precio, imagen}) => {

  const [contador, setContador] = useState(0);
  const incrementar = () => { setContador(contador + 1) };
  
  const decrementar = () => {
    if(contador > 0) 
      setContador(contador - 1) 
  };

  return (
    <div className={estilos.item}>
      <Link to={`/producto/${id}`} className={estilos.link}>
        <h2>
          {nombre}: AR${precio}
        </h2>
        <img className={estilos.imagen} src={imagen} alt={nombre} />
      </Link>
      <div className={estilos.acciones}>
        <BotonFavorito />
        <button onClick={decrementar}> - </button>
        <p>{contador}</p>
        <button onClick={incrementar}> + </button>
      </div>
    </div>
  );
}

export default Item
