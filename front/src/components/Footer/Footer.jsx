import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { useSelector } from "react-redux";

function Footer() {
  const login = useSelector((state) => state.actualUser.userData.login);
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li className={styles.li}>
            <NavLink to="/">
              <span className={styles.span}>Home</span>
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to="/servicios">
              <span className={styles.span}>Servicios</span>
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to={login ? "/appointments" : "/login"}>
              <span className={styles.span}>Reservar un turno</span>
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to="/AboutUs">
              <span className={styles.span}>Sobre nosotros</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
