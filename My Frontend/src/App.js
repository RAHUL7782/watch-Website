
import Admin from "./Admin/Admin"
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Men } from "./components/Pages/Men";
import { Women } from "./components/Pages/Women";
import { Brand } from "./components/Pages/Brand";
import LoginCard from "./components/assets/LoginCard/LoginCard";
import RegisterCard from "./components/assets/RegisterCard/RegisterCard"
import Footer from "./components/Homepage/Footer/Footer";




function App() {
  return (
    <>
    
      <Router>
        <NavBar />
      
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/brand" element={<Brand />} />

            <Route path="/login" element={<LoginCard />} />
            <Route path="/register" element={<RegisterCard />} />
          
            <Route path="/admin" element={<Admin />} />
          

          </Routes>

        </div>
       
      </Router>
    
      <Footer />
    </>
  );
}

export default App;
