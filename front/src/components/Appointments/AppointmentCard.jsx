import React from "react";
import styles from "./AppointmentCard.module.css";
import { format, isAfter, subDays } from "date-fns";

function AppointmentCard({
  id,
  date,
  time,
  status,
  description,
  handleCancel,
}) {
  const fechaActual = new Date();
  date = new Date(date);
  // const fechaLimite = subDays(date, 1);

  const formatDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  if (status === "canceled") {
    status = "Cancelado";
  }
  if (status === "active") {
    status = "Activo";
  }
  const handleClick = () => {
    if (isAfter(fechaActual, date)) {
      alert(
        "No se puede cancelar el turno el mismo día o después de la fecha del turno."
      );
      return;
    }
    if (
      window.confirm(
        `¿Desea cancelar el turno del día ${formatDate} a las ${time}?`
      )
    ) {
      handleCancel(id);
    }
  };
  return (
    <div className={styles.card}>
      <span className={styles.date}>{formatDate + " "}</span>
      <span className={styles.time}>{time + "hrs "}</span>
      <span className={styles.description}>{description + " "}</span>
      {status === "Activo" ? (
        <span className={styles.active}>
          {status}{" "}
          <button className={styles.btn} onClick={handleClick}>
            x
          </button>{" "}
        </span>
      ) : (
        <span className={styles.canceled}>Cancelado</span>
      )}
    </div>
  );
}

export default AppointmentCard;
