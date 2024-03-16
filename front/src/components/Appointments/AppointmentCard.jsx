import React from "react";
import styles from "./AppointmentCard.module.css";

function AppointmentCard({ id, date, time, status, description }) {
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
  return (
    <div className={styles.card}>
      <span className={styles.date}>{formatDate + " "}</span>
      <span className={styles.time}>{time + "hrs "}</span>
      <span className={styles.description}>{description + " "}</span>
      <span className={styles.status}>
        {status} <button className={styles.btn}>x</button>{" "}
      </span>
    </div>
  );
}

export default AppointmentCard;
