import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li className={styles.li}>
            <a className={styles.a} href="">
              Home
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="">
              Iniciar sesión
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
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
