import { Link } from "react-router-dom";

// Se muestra cuando la URL no coincide con ninguna ruta
const NotFound = () => {
  return (
    <div>
      <h1>Página no encontrada</h1>
      <p>La dirección que buscás no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
