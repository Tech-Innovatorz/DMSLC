import Navbar from "./components/Navbar"
import Services from "./pages/services/Services"
import Register from "./pages/register/Register"
import HearingCall from "./pages/hearingCall/HearingCall"
import DeafCall from "./pages/deafCall/DeafCall"

export default function App() {
  return (
    // <div className="bg-gradient-to-br from-[#5A9EE7] to-[#1C344E] min-h-screen w-screen">
    //   {/* <Navbar /> */}
    //   <main>
    //     {/* <Services /> */}
    //   </main>
    // </div>
    <div className=" min-h-screen w-screen">
      {/* <Register/> */}
        {/* <HearingCall /> */}
        <DeafCall />
    </div>
  )
}