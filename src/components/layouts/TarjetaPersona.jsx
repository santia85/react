import estilos from "./TarjetaPersona.module.css";

// Tarjeta reutilizable: recibe los datos de una persona por props
const TarjetaPersona = ({ nombre, rol, email }) => {
  // Iniciales para el avatar (ej: "Lucía Fernández" -> "LF")
  const iniciales = nombre
    .split(" ")
    .map((palabra) => palabra[0])
    .slice(0, 2)
    .join("");

  return (
    <article className={estilos.tarjeta}>
      <div className={estilos.avatar} aria-hidden="true">
        {iniciales}
      </div>
      <div className={estilos.datos}>
        <h5 className={estilos.nombre}>{nombre}</h5>
        <p className={estilos.rol}>{rol}</p>
        <a className={estilos.email} href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </article>
  );
};

export default TarjetaPersona;
