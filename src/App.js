import Main from "./Componets/main";
import Footer from "./Componets/footer";
import { Routes, Route } from "react-router-dom";
import About from "./Componets/about";
import Vehicles from "./Componets/vehicels";
import Srevices from "./Componets/sevices";
import Hader from "./Componets/home";
import Contact from "./Componets/contact-us";
import Addvehicals from "./Componets/Addvehicals";
import UpdateVehicals from "./Componets/UpdateVehicals";
function App() {
  return (
    <>
      <Hader />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/Addvehicals" element={<Addvehicals />} />
        <Route path="/Updatevehicals/:id" element={<UpdateVehicals />} />
        <Route path="/services" element={<Srevices />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
