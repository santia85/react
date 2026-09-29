import { Link } from "react-router-dom";
import estilos from "./Footer.module.css";
import TarjetaPersona from "./TarjetaPersona";

// Datos del equipo: cambialos por los de tu grupo
const equipo = [
  { id: 1, nombre: "Santiago", rol: "Desarrollador", email: "santi@tiendasanti.com" },
  { id: 2, nombre: "Lucía Fernández", rol: "Atención al cliente", email: "lucia@tiendasanti.com" },
  { id: 3, nombre: "Martín Gómez", rol: "Logística y envíos", email: "martin@tiendasanti.com" },
];

const Footer = () => {
  return (
    <footer className={estilos.footer}>
      <div className={estilos.inner}>
        {/* Columna 1: marca */}
        <div className={estilos.col}>
          <h3 className={estilos.brand}>Tienda Santi</h3>
          <p className={estilos.text}>
            © {new Date().getFullYear()} Tienda Santi. Todos los derechos reservados.
          </p>
          <p className={estilos.text}>
            <Link to="/privacidad" className={estilos.link}>
              Políticas de privacidad
            </Link>
            {" | "}
            <Link to="/terminos" className={estilos.link}>
              Términos y condiciones
            </Link>
          </p>
        </div>

        {/* Columna 2: contacto + sucursales */}
        <div className={estilos.col}>
          <h4 className={estilos.title}>Contacto</h4>
          <p className={estilos.text}>Email: contacto@tiendasanti.com</p>
          <p className={estilos.text}>Teléfono: +54 11 1234-5678</p>

          <h4 className={`${estilos.title} ${estilos.titleSpaced}`}>Sucursales</h4>
          <p className={estilos.text}>Ezpeleta, Buenos Aires</p>
        </div>

        {/* Columna 3: newsletter */}
        <div className={estilos.col}>
          <h4 className={estilos.title}>Newsletter</h4>
          <form className={estilos.form} onSubmit={(e) => e.preventDefault()}>
            <input
              className={estilos.input}
              type="email"
              placeholder="Tu email"
              aria-label="Tu email"
            />
            <button className={estilos.button} type="submit">
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      {/* Tarjetas del equipo */}
      <div className={estilos.equipo}>
        <h4 className={estilos.title}>Nuestro equipo</h4>
        <div className={estilos.tarjetas}>
          {equipo.map((persona) => (
            <TarjetaPersona key={persona.id} {...persona} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
