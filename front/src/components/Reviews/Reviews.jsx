import styles from "./Reviews.module.css";
import dani from "../../assets/dani.jpg";
import daniela from "../../assets/daniela.jpg";

function Reviews() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.services}>
        <h3 className={styles.h3}>Servicio de Bioanálisis</h3>
        <img className={styles.dani} src={dani} alt="" />
      </div>
      <div className={styles.servicestwo}>
        <h3 className={styles.h3}>Servicio a domicilio</h3>
        <img className={styles.dani} src={daniela} alt="" />
      </div>
    </section>
  );
}

export default Reviews;
