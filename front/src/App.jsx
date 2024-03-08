import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Reviews from "./components/Reviews/Reviews";
import MyAppointments from "./views/MyAppointments";
import Home from "./views/home";

function App() {
  return (
    <>
      <Navbar />
      {/* <MyAppointments /> */}
      <Home />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
