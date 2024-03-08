import React, { useState } from "react";
import allAppointments from "../helpers/myTurns";
import AppointmentCard from "../components/Appointments/AppointmentCard";
import styles from "./MyAppointments.module.css";

function MyAppointments() {
  const [appointments, setAppointments] = useState(allAppointments);
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Mis reservas</h1>
      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          id={appointment.id}
          date={appointment.date}
          time={appointment.time}
          status={appointment.status}
          description={appointment.description}
        />
      ))}
    </main>
  );
}

export default MyAppointments;
