import React, { useState } from "react";
import styles from "./AddAppointment.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import vet from "../../assets/gato.jpg";

const POSTAPPOINTMET_URL = "http://localhost:3000/appointments/schedule";

export default function AddAppointment() {
  const initialState = {
    date: "",
    time: "",
    description: "",
  };

  const [appointment, setAppointment] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const validateAppointment = ({ date, time, description }) => {
    const errors = {};
    return errors;
  };

  const userId = useSelector((state) => state?.actualUser?.userData?.user?.id);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAppointment = {
      date: appointment.date,
      time: appointment.time,
      description: appointment.description,
      userId: userId,
    };
    axios
      .post(POSTAPPOINTMET_URL, newAppointment)
      .then(({ data }) => data)
      .then((appointmentInDB) => {
        alert(`Se ha reservado el turno para el día ${appointmentInDB.date}`);
        navigate("/appointments");
      })
      .catch((error) => alert(error.message));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setAppointment({ ...appointment, [name]: value });
    setErrors(validateAppointment({ ...appointment, [name]: value }));
  };

  const formData = [
    {
      className: "date",
      name: "date",
      type: "date",
      placeholder: "Ingresar fecha",
    },
    {
      className: "time",
      name: "time",
      type: "time",
      placeholder: "Ingrese la hora",
    },
    {
      className: "description",
      name: "description",
      type: "text",
      placeholder: "Ingrese la descripción",
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.formulario}>
        <h2 className={styles.h2}>Reservar turno</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          {formData.map(({ className, name, type, placeholder }) => {
            return (
              <div key={name}>
                <input
                  required
                  className={className}
                  type={type}
                  id={name}
                  name={name}
                  value={appointment[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                />
              </div>
            );
          })}
          <button
            className={styles.btn}
            type="submit"
            disabled={Object.keys(appointment).some((e) => !appointment[e])}
          >
            Reservar
          </button>
        </form>
      </div>
      <img className={styles.vet} src={vet} alt="Veterinario" />
    </main>
  );
}
