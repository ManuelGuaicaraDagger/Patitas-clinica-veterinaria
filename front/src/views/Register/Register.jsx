import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import vet from "../../assets/husky.jpg";
import { useNavigate } from "react-router-dom";
const POSTUSER = "http://localhost:3000/users/register";

function Register(props) {
  const initialState = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
  const navigate = useNavigate();
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const validateUser = ({
    name,
    email,
    birthdate,
    nDni,
    username,
    password,
    confirmPassword,
  }) => {
    const errors = {};
    if (!name) errors.name = "Debe ingresar su nombre";
    if (!email) errors.email = "Debe ingresar su email";
    if (!birthdate) errors.birthdate = "Debe ingresar su fecha de nacimiento";
    if (!nDni) errors.nDni = "Debe ingresar su número de documento";
    if (!username) errors.username = "Debe ingresar su nombre de usuario";
    if (!password) errors.password = "Debe ingresar su contraseña";
    if (!confirmPassword)
      errors.confirmPassword = "Debe ingresar su contraseña";
    if (password !== confirmPassword) {
      errors.confirmPassword = "Las contraseñas deben ser iguales";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      nDni: user.nDni,
      username: user.username,
      password: user.password,
    };
    axios
      .post(POSTUSER, newUser)
      .then(({ data }) => data)
      .then((userInDB) => {
        alert(`Ha sido creado el usuario ${userInDB.name}`);
        navigate("/login");
      })
      .catch((error) => alert(error.message));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });

    setErrors(validateUser({ ...user, [name]: value }));
  };

  const handleReset = (event) => {
    event.preventDefault();
    setUser(initialState);
  };

  const formData = [
    {
      className: "name",
      label: "Nombre: ",
      name: "name",
      type: "text",
      placeholder: "Ingrese su nombre",
    },
    {
      className: "email",
      label: "Email: ",
      name: "email",
      type: "email",
      placeholder: "Ingrese su email",
    },
    {
      className: "birthdate",
      label: "Fecha de nacimiento: ",
      name: "birthdate",
      type: "date",
      placeholder: "Ingrese su fecha de nacimiento",
    },
    {
      className: "nDni",
      label: "DNI: ",
      name: "nDni",
      type: "text",
      placeholder: "Ingrese su número de documento",
    },
    {
      className: "username",
      label: "Nombre de usuario: ",
      name: "username",
      type: "text",
      placeholder: "Ingrese su nombre de usuario",
    },
    {
      className: "password",
      label: "Contraseña: ",
      name: "password",
      type: "password",
      placeholder: "Ingrese su contraseña",
    },
    {
      className: "password",
      label: "Repita su contraseña: ",
      name: "confirmPassword",
      type: "password",
      placeholder: "Repita su contraseña",
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.formulario}>
        <h2 className={styles.h2}>Registro</h2>
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
                  value={user[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                />
              </div>
            );
          })}
          <button
            className={styles.btn}
            type="submit"
            disabled={Object.keys(user).some((e) => !user[e])}
          >
            Enviar
          </button>
          <button className={styles.btn} onClick={handleReset}>
            Borrar
          </button>
        </form>
      </div>
      <img className={styles.vet} src={vet} alt="Veterinario" />
    </main>
  );
}

export default Register;
