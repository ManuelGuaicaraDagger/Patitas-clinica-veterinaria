import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Reviews from "./components/Reviews/Reviews";
import Login from "./views/Login/Login";
import MyAppointments from "./views/MyAppointments";
import Register from "./views/Register/Register";
import Home from "./views/home";
import AboutUs from "./views/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import AddAppointment from "./views/AddAppointment/AddAppointment";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/AddAppointment" element={<AddAppointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
