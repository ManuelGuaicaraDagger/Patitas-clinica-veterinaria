import styles from "./Main.module.css";
import vet from "../../assets/vet.jpg";

function Main() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.h1}>Clínica Veterinaria</h1>
        <p className={styles.p}>
          En Patitas, entendemos que las mascotas son una parte fundamental de
          nuestras vidas, y su bienestar es nuestra principal prioridad. Somos
          más que una clínica veterinaria comprometida con la salud y felicidad
          de tus fieles compañeros, ofreciendo servicios integrales de atención
          médica, atención preventiva y contamos con un equipo dedicado de
          profesionales apasionados por los animales.
        </p>
      </div>
      <img className={styles.vet} src={vet} alt="Veterinario" />
    </main>
  );
}

export default Main;
