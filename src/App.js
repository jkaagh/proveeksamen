import Splash from "./components/Splash"
import Header from "./components/Header"
import Treatments from "./components/Treatments";
import Reviews from "./components/Reviews";
import Team from "./components/Team";
import Appointment from "./components/Appointment";
function App() {
  return (
    <>
        <Header/>
        <Splash/>
        <Treatments/>
        <Reviews/>
        <Team/>
        <Appointment/>
    </>
  );
}

export default App;
