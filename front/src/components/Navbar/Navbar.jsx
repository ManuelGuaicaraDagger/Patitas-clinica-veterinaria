import styles from "./Navbar.module.css";
import icono from "../../assets/ico2.png";
import { NavLink, useNavigate } from "react-router-dom";
import paw from "../../assets/paw.png";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../redux/userSlice";

function Navbar() {
  const navigate = useNavigate();
  const login = useSelector((state) => state.actualUser.userData.login);
  const dispatch = useDispatch();
  function handleLogout(event) {
    event.preventDefault();
    dispatch(setLogout({}));
    navigate("/");
  }

  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img className={styles.paw} src={paw} alt="Logo" />
      </NavLink>
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
                <span className={styles.span}>Mis turnos</span>
              </li>
            </NavLink>
          )}
          {login && (
            <NavLink to="/AddAppointment">
              <li className={styles.li}>
                <span className={styles.span}>Reservar turno</span>
              </li>
            </NavLink>
          )}
          <NavLink to="/AboutUs">
            <li className={styles.li}>
              <span className={styles.span}>Sobre nosotros</span>
            </li>
          </NavLink>
          {!login && (
            <NavLink to="/login">
              <li className={styles.li}>
                <span className={styles.span}>Iniciar sesión</span>
              </li>
            </NavLink>
          )}
          {login && (
            <NavLink to="/">
              <li className={styles.li}>
                <span onClick={handleLogout} className={styles.span}>
                  Cerrar sesión
                </span>
              </li>
            </NavLink>
          )}
        </ul>
      </nav>
      <NavLink to={login ? "/appointments" : "/login"}>
        <img className={styles.icono} src={icono} alt="Logo" />
      </NavLink>
    </header>
  );
}

export default Navbar;
