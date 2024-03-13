import axios from "axios";
import styles from "./Login.module.css";
import { useState } from "react";
import vet from "../../assets/husky.jpg";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlices";
import { useNavigate } from "react-router-dom";

const USERLOGIN_URL = "http://localhost:3000/users/login";

function Login() {
  const initialState = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const validateUser = ({ username, password }) => {
    const errors = {};
    if (!username) errors.username = "Debe ingresar el nombre de usuario";
    if (!password) errors.password = "Debe ingresar la contraseña";
    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setErrors(validateUser({ ...user, [name]: value }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(USERLOGIN_URL, user)
      .then((response) => response.data)
      .then((data) => {
        dispatch(setUserData(data));
        alert("Sesión iniciada correctamente");
        navigate("/");
      })
      .catch((error) =>
        alert(`Acceso deneado: ${error?.response?.data?.message}`)
      );
  };

  const formData = [
    {
      className: "username",
      name: "username",
      type: "text",
      placeholder: "Nombre de usuario",
    },
    {
      className: "password",
      name: "password",
      type: "password",
      placeholder: "Contraseña",
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.formulario}>
        <h2 className={styles.h2}>Iniciar sesión</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          {formData.map(({ className, label, name, type, placeholder }) => {
            return (
              <div className="input" key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  key={name}
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
          <button className={styles.btn} type="submit">
            Enviar
          </button>
        </form>
      </div>
      <img className={styles.vet} src={vet} alt="Veterinario" />
    </main>
  );
}

export default Login;