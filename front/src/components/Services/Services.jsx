import React from "react";
import styles from "./Services.module.css";
import vet from "../../assets/vete.jpg";

export default function Services() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.h1}>¿Qué ofrecemos?</h1>
        <p className={styles.p}>
          En Patitas contamos con equipo de última tecnología para poder
          garantizar el rápido diagnostico de tu mascota, así como personal
          especialísta en bioanális y toma de muestras. De igual forma ponemos a
          su disposición visitas a domicilio, ya que entendemos que a veces es
          complicado mover a nuestros compañeros peludos
        </p>
      </div>
      <img className={styles.vet} src={vet} alt="Veterinario" />
    </main>
  );
}
