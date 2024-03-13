import axios from "axios";
import React, { useEffect, useState } from "react";
import AppointmentCard from "../components/Appointments/AppointmentCard";
import styles from "./MyAppointments.module.css";
import { useSelector } from "react-redux";

const GETAPPOINTMENTS_URL = "http://localhost:3000/appointments";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  // const actualUserId = useSelector(
  //   (state) => state.actualUser.userData.user.id
  // );
  // console.log(actualUserId);
  useEffect(() => {
    axios
      .get(GETAPPOINTMENTS_URL)
      .then((response) => response.data)
      .then((appointmentsDB) => setAppointments(appointmentsDB))
      .catch((error) => console.log(error.message));
  }, []);

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
