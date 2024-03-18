import axios from "axios";
import React, { useEffect, useState } from "react";
import AppointmentCard from "../components/Appointments/AppointmentCard";
import styles from "./MyAppointments.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../redux/userSlice";
import { format, isAfter, subDays } from "date-fns";

const GETUSERBYID_URL = "http://localhost:3000/users/";

function MyAppointments() {
  const CANCEL_URL = "http://localhost:3000/appointments/cancel/";
  const dispatch = useDispatch();
  const actualUserId = useSelector(
    (state) => state.actualUser?.userData?.user?.id
  );
  const appointment = useSelector((state) => state.actualUser.userAppointments);
  useEffect(() => {
    axios
      .get(GETUSERBYID_URL + actualUserId)
      .then((response) => response.data)
      .then((data) => data.appointments)
      .then((appointments) => dispatch(setUserAppointments(appointments)))
      .catch((error) => console.log(error.message));
  }, []);

  const handleCancel = (id) => {
    axios
      .put(CANCEL_URL + id)
      .then((response) => response.data)
      .then((data) => {
        axios
          .get(GETUSERBYID_URL + actualUserId)
          .then((response) => response.data)
          .then((data) => data.appointments)
          .then((appointments) => dispatch(setUserAppointments(appointments)))
          .catch((error) => console.log(error.message));
      })
      .catch((error) => alert(`Error al cancelar el turno`));
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Mis turnos</h1>
      {appointment.length ? (
        appointment.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            id={appointment.id}
            date={appointment.date}
            time={appointment.time}
            status={appointment.status}
            description={appointment.description}
            handleCancel={handleCancel}
          />
        ))
      ) : (
        <p className={styles.p}>No hay reservas</p>
      )}
    </main>
  );
}

export default MyAppointments;
