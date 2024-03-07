import styles from "./Navbar.module.css";
import icono from "../../assets/ico2.png";

function Navbar() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">
        <img
          className={styles.paw}
          src="https://seeklogo.com/images/P/paw-paw-logo-9611469C33-seeklogo.com.png"
          alt="Logo"
        />
      </a>
      <nav>
        <ul>
          <li className={styles.li}>
            <a className={styles.a} href="">
              Home
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="index.html#servicios">
              Servicios
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="">
              Reservar un turno
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="">
              Sobre nosotros
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="">
              Iniciar sesión
            </a>
          </li>
        </ul>
      </nav>
      <a className={styles.logo} href="#">
        <img className={styles.icono} src={icono} alt="Logo" />
      </a>
    </header>
  );
}

export default Navbar;
