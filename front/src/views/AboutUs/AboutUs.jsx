import styles from "./AboutUs.module.css";
import lin from "../../assets/in.png";
import gitu from "../../assets/gitu.png";

import vet from "../../assets/fondo.jpg";

export default function AboutUs() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.h1}>Sobre nosotros</h2>
        <p className={styles.p}>
          Mi nombre es Manuel Guaicara, FullStack developer. El Front-end de
          este Proyecto fué realizado usando ReactJs, JavaScript, CSS y HTML.
          Para eñ Back-end fué utilizado potgreSQL usando Express, TypeScript y
          TypeORM. Puedes contactarme a traves de los siguientes links.
        </p>
        <ul className={styles.ul}>
          <li>
            <a
              href="https://www.linkedin.com/in/manuel-alejandro-guaicara-dagger-784a06194/"
              target="blank"
            >
              <img src={lin} alt="Linkedln" />
            </a>
          </li>
          <a href="https://github.com/ManuelGuaicaraDagger" target="blank">
            <img className={styles.git} src={gitu} alt="Github" />
          </a>
          <li></li>
        </ul>
      </div>
      <img className={styles.vet} src={vet} alt="Veterinario" />
    </main>
  );
}
