import React from "react";
//import Routes

import { Route, Routes } from "react-router-dom";

//import components
// import Header from './components/Header'

//import pages
import AppDashboard from "./dashbord/AppDashbord";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import { Login } from "./pages/Login";

//import dashboard pages
import AdminDashboard from "./dashbord/Pages/AdminDashboard";
import Bills from "./dashbord/Pages/Bills";
import ChangePassword from "./dashbord/Pages/ChangePassword";
import Logout from "./dashbord/Pages/Logout";
import Messages from "./dashbord/Pages/Messages";
import PgBuldings from "./dashbord/Pages/PgBuldings";
import PgRooms from "./dashbord/Pages/PgRooms";
import Rent from "./dashbord/Pages/Rent";
import Tenants from "./dashbord/Pages/Tenants";
import Bookings from "./dashbord/Pages/Bookings";

//import main components
import HouseList from "./components/HouseList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserDashboard from "./userDashbord/Pages/UserDashboard";
import AppUserDashboard from "./userDashbord/AppUserDashbord";
import Addpg from "./dashbord/Pages/Addpg";
import PgUpdate from "./dashbord/Pages/Update/PgUpdate";

const App = () => {
  return (
    <div className=" mx-auto bg-white">
      {/* max-w-[1240px] */}
      {/* <Header /> */}

      <Routes>
        {/* //pages routes */}
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/Login" element={<Login />} />
        {/* Navbar Link Routes */}
        <Route path="/property" element={<HouseList />} />

        {/* //admin dashboard routes */}
        <Route path="/admindashboard/" element={<AppDashboard />}>
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="pgBuildings" element={<PgBuldings />} />
          {/* route for update pg */}
          <Route path="pgBuldings/pg/update" element={<PgUpdate />} />
         
         
          <Route path="pgRooms" element={<PgRooms />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="tenants" element={<Tenants />} />
          <Route path="rent" element={<Rent />} />
          <Route path="bills" element={<Bills />} />
          <Route path="messages" element={<Messages />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="logout" element={<Logout />} />
          <Route path="pgBuildings/pg/add" element={<Addpg/>} />
          <Route path="*" element={<> not found</>} />
        </Route>

        {/* //user dashboard routes */}
        <Route path="/userdashboard/" element={<AppUserDashboard />}>
          <Route path="userdashboard" element={<UserDashboard />} />
          <Route path="rent" element={<Rent />} />
          <Route path="bills" element={<Bills />} />
          <Route path="messages" element={<Messages />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="logout" element={<Logout />} />
          
          <Route path="*" element={<> not found</>} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
