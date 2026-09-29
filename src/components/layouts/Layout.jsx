import Footer from "./Footer";
import Header from "./Header";
import estilos from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={estilos.layout}>
      <Header />
      <main className={estilos.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
