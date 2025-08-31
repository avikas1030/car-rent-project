
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Pages
import Dashboard from "./pages/Dashboard"; // your full UI code moved here
import Drivers from "./pages/Drivers";
import Bookings from "./pages/Bookings";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import PaymentDetails from "./pages/PaymentDetails";
import Transactions from "./pages/Transactions";
import CarReport from "./pages/CarReport";

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/car-report" element={<CarReport />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
