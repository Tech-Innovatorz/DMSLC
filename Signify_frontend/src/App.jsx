import Navbar from "./components/Navbar"
import Services from "./pages/services/Services"
import Authentication from "./pages/authentication/Authentication"
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { getAuth } from 'firebase/auth'

// const user = getAuth().currentUser;
// console.log(user.uid);

export default function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={user ? <Home /> : <Navigate to="/authenticate" replace />} />
    //     <Route path="/authenticate" element={!user ? <Authentication /> : <Navigate to="/" replace />} />
        
    //     {user && (
    //       <>
    //         <Route path="/services" element={<Services type="services" />} />
    //         {/* Add more routes as needed for authenticated users */}
    //       </>
    //     )}

    //     {/* Add a catch-all route for 404 or not found */}
    //     <Route path="*" element={<Navigate to="/404" />} />
    //   </Routes>
    // </Router>
    <div>
      <Authentication/>
    </div>
  );
}