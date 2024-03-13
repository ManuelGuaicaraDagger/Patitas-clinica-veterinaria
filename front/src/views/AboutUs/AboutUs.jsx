import styles from "./AboutUs.module.css";

import vet from "../../assets/fondo.jpg";

export default function AboutUs() {
  return (
    <main className={styles.main}>
      <div>
        <h2 className={styles.h1}>Sobre nosotros</h2>
        <p className={styles.p}>
          Mi nombre es Manuel Guaicara, soy estudiante de la carrera FullStack
          Developer en Henry y este es mi proyecto integrador del M3. <br />
          Decidí hacer una página de gestión de turnos de una clínica
          veterinaria ya que amo a los animales, actualmente tengo dos mascotas:
          Malta y Ori.
        </p>
      </div>
      <img className={styles.vet} src={vet} alt="Veterinario" />
    </main>
  );
}
