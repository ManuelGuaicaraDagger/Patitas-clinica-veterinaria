import styles from "./Navbar.module.css";
import icono from "../../assets/ico2.png";
import { NavLink } from "react-router-dom";
import paw from "../../assets/paw.png";
import { useSelector } from "react-redux";

function Navbar() {
  const login = useSelector((state) => state.actualUser.userData.login);

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">
        <img className={styles.paw} src={paw} alt="Logo" />
      </a>
      <nav>
        <ul>
          <NavLink to="/">
            <li className={styles.li}>
              <span className={styles.span}>Home</span>
            </li>
          </NavLink>
          <NavLink to="/servicios">
            <li className={styles.li}>
              <span className={styles.span}>Servicios</span>
            </li>
          </NavLink>
          {login && (
            <NavLink to="/appointments">
              <li className={styles.li}>
                <span className={styles.span}>Reservar un turno</span>
              </li>
            </NavLink>
          )}
          <NavLink to="/AboutUs">
            <li className={styles.li}>
              <span className={styles.span}>Sobre nosotros</span>
            </li>
          </NavLink>
          <NavLink to="/login">
            <li className={styles.li}>
              <span className={styles.span}>Iniciar sesión</span>
            </li>
          </NavLink>
        </ul>
      </nav>
      <NavLink to="/login">
        <img className={styles.icono} src={icono} alt="Logo" />
      </NavLink>
    </header>
  );
}

export default Navbar;
