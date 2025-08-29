import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Car,
  CalendarCheck,
  Bell,
  Settings,
  CreditCard,
  Repeat,
  FileText,
  LogOut,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard className="h-4 w-4 mr-2" /> },
    { name: "Drivers", path: "/drivers", icon: <Car className="h-4 w-4 mr-2" /> },
    { name: "Bookings", path: "/bookings", icon: <CalendarCheck className="h-4 w-4 mr-2" /> },
    { name: "Notifications", path: "/notifications", icon: <Bell className="h-4 w-4 mr-2" /> },
    { name: "Settings", path: "/settings", icon: <Settings className="h-4 w-4 mr-2" /> },
    { name: "Payment Details", path: "/payment-details", icon: <CreditCard className="h-4 w-4 mr-2" /> },
    { name: "Transactions", path: "/transactions", icon: <Repeat className="h-4 w-4 mr-2" /> },
    { name: "Car Report", path: "/car-report", icon: <FileText className="h-4 w-4 mr-2" /> },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">CAR RENT</h1>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center text-left p-2 rounded-md hover:bg-gray-700 ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto">
        <button className="flex items-center justify-between w-full bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-md">
          <div className="flex items-center">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </div>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
// console.log("Sidebar rendered");

export default Sidebar;
