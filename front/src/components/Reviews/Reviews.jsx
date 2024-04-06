import styles from "./Reviews.module.css";
import dani from "../../assets/dani.jpg";
import daniela from "../../assets/daniela.jpg";
import int from "../../assets/int.jpg";

function Reviews() {
  return (
    <section className={styles.section}>
      <div className={styles.services}>
        <h3 className={styles.h3}>Servicio de Bioanálisis</h3>
        <img className={styles.dani} src={dani} alt="" />
      </div>
      <div className={styles.servicestwo}>
        <h3 className={styles.h3}>Servicio a domicilio</h3>
        <img className={styles.dani} src={daniela} alt="" />
      </div>
      <div className={styles.servicestwo}>
        <h3 className={styles.h3}>Servicio de internación</h3>
        <img className={styles.dani} src={int} alt="" />
      </div>
    </section>
  );
}

export default Reviews;
