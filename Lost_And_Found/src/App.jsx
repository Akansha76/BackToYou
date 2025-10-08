import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar"
import SignUp from "./pages/SignUp.jsx"
import Login  from "./pages/Login.jsx"
import FoundItems from "./pages/FoundItems.jsx";
import LostItems from "./pages/LostItems.jsx";
import LostReportForm from "./pages/LostReportForm.jsx"
import FoundReportForm from "./pages/FoundReportForm.jsx"
import FoundItemsPage from "./pages/FoundItems.jsx"
import About from "./pages/AboutPage.jsx"
function RootApp() {
  return (
    <>
     <Navbar />
    <Routes>
       
      <Route path="/" element={<Home />} />
      <Route path="/report-lost" element={<LostReportForm />} />
      <Route path="/report-found" element={<FoundReportForm />} />
      <Route path="/found-items" element={<FoundItems />} />
      <Route path="/lost-items" element={<LostItems />} />
      <Route path="/browse" element={<div>Browse Items</div>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/About" element={<About/>}/>
      {/* <Route path="/found-items" element={<FoundItemsPage/>}/> */}
    </Routes>
    </>
    
  )
}

export default RootApp
