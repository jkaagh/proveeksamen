import Splash from "./components/Splash"
import Header from "./components/Header"
import Treatments from "./components/Treatments";
import Reviews from "./components/Reviews";
import Team from "./components/Team";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
  return (
    <>
        <Header/>
        <Splash/>
        <About/>
        <Treatments/>
        <Reviews/>
        <Team/>
        <Appointment/>
        <Footer/>
    </>
  );
}

export default App;
