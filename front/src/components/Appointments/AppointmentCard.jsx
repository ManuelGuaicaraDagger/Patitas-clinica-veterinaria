import React from "react";
import styles from "./AppointmentCard.module.css";

function AppointmentCard({
  id,
  date,
  time,
  status,
  description,
  handleCancel,
}) {
  date = new Date(date);
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
