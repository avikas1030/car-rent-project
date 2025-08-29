
// import { useEffect, useState } from "react";
// import './App.css'

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setToCart] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error(err));
//   }, []);

//   const addToCart = (product) => {
//     setToCart((prevCart) => [...prevCart, product]);
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-xl font-bold mb-5">Products</h1>
//       <div id="main" className="grid grid-cols-2 md:grid-cols-4 gap-5">
//         {products.map((item) => (
//           <div
//             key={item.id}
//             className="border p-3 flex flex-col items-center rounded shadow"
//           >
//             <img
//               width={90}
//               src={item.image}
//               alt={item.title}
//               className="h-40 object-contain mb-2"
//             />
//             <h3 className="text-sm font-semibold">{item.title}</h3>
//             <h2 className="text-green-600 font-bold">${item.price}</h2>
//             <h3 className="text-yellow-600"> {item.rating.rate}</h3>
//             <button
//               onClick={() => addToCart(item)}
//               className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
//             >
//               Add to cart
//             </button>
//           </div>
//         ))}
//       </div>

      
//       <div className="mt-10">
//         <h2 className="text-xl font-bold">Cart ({cart.length})</h2>
//         {cart.map((c, index) => (
//           <p key={index}>{c.title}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;




// import React from "react";
// import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { Search, Bell, Calendar, Clock } from "lucide-react";

// const hireCancelData = [
//   { name: "Total Hired", value: 54, color: "#3b82f6" },
//   { name: "Total Canceled", value: 20, color: "#22c55e" },
//   { name: "Total Pending", value: 26, color: "#ef4444" },
// ];

// const earningsData = [
//   { month: "May", earnings: 200 },
//   { month: "Jun", earnings: 150 },
//   { month: "Jul", earnings: 180 },
//   { month: "Aug", earnings: 220 },
//   { month: "Sep", earnings: 190 },
//   { month: "Oct", earnings: 240 },
// ];

// function App() {
//   return (
//     <div className="flex h-screen w-full bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-900 text-white flex flex-col p-4">
//         <h1 className="text-2xl font-bold mb-8">CAR RENT</h1>
//         <nav className="flex flex-col gap-3">
//           {[
//             "Dashboard",
//             "Drivers",
//             "Bookings",
//             "Notifications",
//             "Settings",
//             "Payment Details",
//             "Transactions",
//             "Car Report",
//           ].map((item, i) => (
//             <button
//               key={i}
//               className={`text-left p-2 rounded-md hover:bg-gray-700 ${
//                 item === "Dashboard" ? "bg-blue-600" : ""
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </nav>
//         <div className="mt-auto">
//           <button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-md">
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-xl font-semibold">Todays Statistics</h2>
//             <p className="text-gray-500 text-sm">Tue, 14 Nov, 2022, 11:30 AM</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <Bell className="text-gray-500" />
//             <input
//               placeholder="Search here"
//               className="w-64 border px-2 py-1 rounded-md"
//             />
//             <Search className="text-gray-500" />
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-6 mb-6">
//           <div className="bg-white rounded-xl shadow p-4">
//             <h3 className="text-gray-500">Income</h3>
//             <p className="text-2xl font-bold">$9460.00</p>
//             <p className="text-red-500">↓ 1.5%</p>
//             <p className="text-sm text-gray-400">
//               Last week Income $25658.00
//             </p>
//           </div>
//           <div className="bg-white rounded-xl shadow p-4">
//             <h3 className="text-gray-500">Expenses</h3>
//             <p className="text-2xl font-bold">$5660.00</p>
//             <p className="text-green-500">↑ 2.5%</p>
//             <p className="text-sm text-gray-400">
//               Last week expenses $22658.00
//             </p>
//           </div>
//           <div className="bg-white rounded-xl shadow p-4">
//             <h3 className="text-gray-500 mb-2">Hire vs Cancel</h3>
//             <ResponsiveContainer width="100%" height={150}>
//               <PieChart>
//                 <Pie
//                   data={hireCancelData}
//                   dataKey="value"
//                   innerRadius={40}
//                   outerRadius={60}
//                 >
//                   {hireCancelData.map((entry, index) => (
//                     <Cell key={index} fill={entry.color} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//             <ul className="text-xs text-gray-500 mt-2">
//               {hireCancelData.map((d, i) => (
//                 <li key={i}>
//                   {d.name}: {d.value}%
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Car Availability & Live Car Status */}
//         <div className="bg-white rounded-xl shadow p-4 mb-6">
//           <div className="flex gap-4 items-center mb-4">
//             <input
//               placeholder="Car number"
//               className="w-40 border px-2 py-1 rounded-md"
//             />
//             <div className="flex items-center border rounded px-3 py-2 text-gray-500">
//               <Calendar className="h-4 w-4 mr-2" /> Nov 20, 2022
//             </div>
//             <div className="flex items-center border rounded px-3 py-2 text-gray-500">
//               <Clock className="h-4 w-4 mr-2" /> 10 AM
//             </div>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//               Check
//             </button>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-gray-600">
//                 <th className="p-2">No.</th>
//                 <th className="p-2">Car no.</th>
//                 <th className="p-2">Driver</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Earning</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 { no: 1, car: 6465, driver: "Alex Noman", status: "Completed", earning: 35.44 },
//                 { no: 2, car: 5665, driver: "Razib Rahman", status: "Pending", earning: 0 },
//                 { no: 3, car: 1755, driver: "Luke Norton", status: "In route", earning: 23.5 },
//               ].map((row, i) => (
//                 <tr key={i} className="border-b">
//                   <td className="p-2">{row.no}</td>
//                   <td className="p-2">{row.car}</td>
//                   <td className="p-2">{row.driver}</td>
//                   <td
//                     className={`p-2 ${
//                       row.status === "Completed"
//                         ? "text-green-600"
//                         : row.status === "Pending"
//                         ? "text-blue-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     {row.status}
//                   </td>
//                   <td className="p-2">${row.earning}</td>
//                   <td className="p-2">
//                     <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
//                       Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Earning Summary */}
//         <div className="bg-white rounded-xl shadow p-4">
//           <h3 className="text-gray-500 mb-4">Earning Summary</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={earningsData}>
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="earnings"
//                 stroke="#3b82f6"
//                 strokeWidth={2}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;














// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Search,
//   Bell,
//   Calendar,
//   Clock,
//   LayoutDashboard,
//   Car,
//   Users,
//   Settings,
//   CreditCard,
//   Repeat,
//   FileText,
//   LogOut,
//   ChevronRight,
//   CalendarCheck,
// } from "lucide-react";
// import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// const hireCancelData = [
//   { name: "Total Hired", value: 54, color: "#3b82f6" },
//   { name: "Total Canceled", value: 20, color: "#22c55e" },
//   { name: "Total Pending", value: 26, color: "#ef4444" },
// ];

// const earningsData = [
//   { month: "May", earnings: 200 },
//   { month: "Jun", earnings: 150 },
//   { month: "Jul", earnings: 180 },
//   { month: "Aug", earnings: 220 },
//   { month: "Sep", earnings: 190 },
//   { month: "Oct", earnings: 240 },
// ];

// function App() {
//   const sidebarMenu = [
//     { name: "Dashboard", icon: <LayoutDashboard className="h-4 w-4 mr-2" /> },
//     { name: "Drivers", icon: <Car className="h-4 w-4 mr-2" /> },
//     { name: "Bookings", icon: <CalendarCheck className="h-4 w-4 mr-2" /> },
//     { name: "Notifications", icon: <Bell className="h-4 w-4 mr-2" /> },
//     { name: "Settings", icon: <Settings className="h-4 w-4 mr-2" /> },
//     { name: "Payment Details", icon: <CreditCard className="h-4 w-4 mr-2" /> },
//     { name: "Transactions", icon: <Repeat className="h-4 w-4 mr-2" /> },
//     { name: "Car Report", icon: <FileText className="h-4 w-4 mr-2" /> },
//   ];

//   return (
//     <div className="flex h-screen w-full bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-900 text-white flex flex-col p-4">
//         <h1 className="text-2xl font-bold mb-8">CAR RENT</h1>
//         <nav className="flex flex-col gap-2">
//           {sidebarMenu.map((item, i) => (
//             <button
//               key={i}
//               className={`flex items-center text-left p-2 rounded-md hover:bg-gray-700 ${
//                 item.name === "Dashboard" ? "bg-blue-600" : ""
//               }`}
//             >
//               {item.icon}
//               {item.name}
//             </button>
//           ))}
//         </nav>
//         <div className="mt-auto">
//           <button className="flex items-center justify-between w-full bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-md">
//             <div className="flex items-center">
//               <LogOut className="h-4 w-4 mr-2" />
//               Logout
//             </div>
//             <ChevronRight className="h-4 w-4" />
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-xl font-semibold">Todays Statistics</h2>
//             <p className="text-gray-500 text-sm">Tue, 14 Nov, 2022, 11:30 AM</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <Bell className="text-gray-500" />
//             <input
//               placeholder="Search here"
//               className="w-64 border px-2 py-1 rounded-md"
//             />
//             <Search className="text-gray-500" />
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-6 mb-6">
//           <div className="bg-white rounded-xl shadow p-4">
//             <h3 className="text-gray-500">Income</h3>
//             <p className="text-2xl font-bold">$9460.00</p>
//             <p className="text-red-500">↓ 1.5%</p>
//             <p className="text-sm text-gray-400">Last week Income $25658.00</p>
//           </div>
//           <div className="bg-white rounded-xl shadow p-4">
//             <h3 className="text-gray-500">Expenses</h3>
//             <p className="text-2xl font-bold">$5660.00</p>
//             <p className="text-green-500">↑ 2.5%</p>
//             <p className="text-sm text-gray-400">
//               Last week expenses $22658.00
//             </p>
//           </div>
//           <div className="bg-white rounded-xl shadow p-4">
//   <h3 className="text-gray-500 mb-2">Hire vs Cancel</h3>
//   <ResponsiveContainer width="100%" height={150}>
//     <PieChart>
//       <Pie
//         data={hireCancelData}
//         dataKey="value"
//         innerRadius={40}
//         outerRadius={60}
//       >
//         {hireCancelData.map((entry, index) => (
//           <Cell key={index} fill={entry.color} />
//         ))}
//       </Pie>
//     </PieChart>
//   </ResponsiveContainer>

//   {/* Custom legend with colors + arrows */}
//   <ul className="text-sm mt-2 space-y-1">
//     {hireCancelData.map((d, i) => (
//       <li
//         key={i}
//         className={`flex items-center gap-2 font-medium
//           ${d.name === "Total Hired" ? "text-blue-600" : ""}
//           ${d.name === "Total Canceled" ? "text-green-600" : ""}
//           ${d.name === "Total Pending" ? "text-red-600" : ""}`}
//       >
//         {d.name}: {d.value}%
//         {d.name === "Total Pending" ? (
//           <ArrowDownRight className="h-4 w-4 text-red-600" />
//         ) : (
//           <ArrowUpRight className="h-4 w-4 text-green-600" />
//         )}
//       </li>
//     ))}
//   </ul>
// </div>
//         </div>

//         {/* Car Availability & Live Car Status */}
//         <div className="bg-white rounded-xl shadow p-4 mb-6">
//           <div className="flex gap-4 items-center mb-4">
//             <input
//               placeholder="Car number"
//               className="w-40 border px-2 py-1 rounded-md"
//             />
//             <div className="flex items-center border rounded px-3 py-2 text-gray-500">
//               <Calendar className="h-4 w-4 mr-2" /> Nov 20, 2022
//             </div>
//             <div className="flex items-center border rounded px-3 py-2 text-gray-500">
//               <Clock className="h-4 w-4 mr-2" /> 10 AM
//             </div>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//               Check
//             </button>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-gray-600">
//                 <th className="p-2">No.</th>
//                 <th className="p-2">Car no.</th>
//                 <th className="p-2">Driver</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Earning</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 {
//                   no: 1,
//                   car: 6465,
//                   driver: "Alex Noman",
//                   status: "Completed",
//                   earning: 35.44,
//                 },
//                 {
//                   no: 2,
//                   car: 5665,
//                   driver: "Razib Rahman",
//                   status: "Pending",
//                   earning: 0,
//                 },
//                 {
//                   no: 3,
//                   car: 1755,
//                   driver: "Luke Norton",
//                   status: "In route",
//                   earning: 23.5,
//                 },
//               ].map((row, i) => (
//                 <tr key={i} className="border-b">
//                   <td className="p-2">{row.no}</td>
//                   <td className="p-2">{row.car}</td>
//                   <td className="p-2">{row.driver}</td>
//                   <td
//                     className={`p-2 ${
//                       row.status === "Completed"
//                         ? "text-green-600"
//                         : row.status === "Pending"
//                         ? "text-blue-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     {row.status}
//                   </td>
//                   <td className="p-2">${row.earning}</td>
//                   <td className="p-2">
//                     <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
//                       Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Earning Summary */}
//         <div className="bg-white rounded-xl shadow p-4">
//           <h3 className="text-gray-500 mb-4">Earning Summary</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={earningsData}>
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="earnings"
//                 stroke="#3b82f6"
//                 strokeWidth={2}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Search,
//   Bell,
//   Calendar,
//   Clock,
//   LayoutDashboard,
//   Car,
//   Settings,
//   CreditCard,
//   Repeat,
//   FileText,
//   LogOut,
//   ChevronRight,
//   CalendarCheck,
// } from "lucide-react";
// import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// const hireCancelData = [
//   { name: "Total Hired", value: 54, color: "#3b82f6" },
//   { name: "Total Canceled", value: 20, color: "#22c55e" },
//   { name: "Total Pending", value: 26, color: "#ef4444" },
// ];

// const earningsData = [
//   { month: "May", earnings: 200 },
//   { month: "Jun", earnings: 150 },
//   { month: "Jul", earnings: 180 },
//   { month: "Aug", earnings: 220 },
//   { month: "Sep", earnings: 190 },
//   { month: "Oct", earnings: 240 },
// ];

// function App() {
//   const sidebarMenu = [
//     { name: "Dashboard", icon: <LayoutDashboard className="h-4 w-4 mr-2" /> },
//     { name: "Drivers", icon: <Car className="h-4 w-4 mr-2" /> },
//     { name: "Bookings", icon: <CalendarCheck className="h-4 w-4 mr-2" /> },
//     { name: "Notifications", icon: <Bell className="h-4 w-4 mr-2" /> },
//     { name: "Settings", icon: <Settings className="h-4 w-4 mr-2" /> },
//     { name: "Payment Details", icon: <CreditCard className="h-4 w-4 mr-2" /> },
//     { name: "Transactions", icon: <Repeat className="h-4 w-4 mr-2" /> },
//     { name: "Car Report", icon: <FileText className="h-4 w-4 mr-2" /> },
//   ];

//   const drivers = [
//     {
//       no: 1,
//       car: 6465,
//       driver: "Alex Noman",
//       img: "https://randomuser.me/api/portraits/men/32.jpg",
//       status: "Completed",
//       earning: 35.44,
//     },
//     {
//       no: 2,
//       car: 5665,
//       driver: "Razib Rahman",
//       img: "https://randomuser.me/api/portraits/men/45.jpg",
//       status: "Pending",
//       earning: 0,
//     },
//     {
//       no: 3,
//       car: 1755,
//       driver: "Luke Norton",
//       img: "https://randomuser.me/api/portraits/men/51.jpg",
//       status: "In route",
//       earning: 23.5,
//     },
//   ];

//   return (
//     <div className="flex h-screen w-full bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-900 text-white flex flex-col p-4">
//         <h1 className="text-2xl font-bold mb-8">CAR RENT</h1>
//         <nav className="flex flex-col gap-2">
//           {sidebarMenu.map((item, i) => (
//             <button
//               key={i}
//               className={`flex items-center text-left p-2 rounded-md hover:bg-gray-700 ${
//                 item.name === "Dashboard" ? "bg-blue-600" : ""
//               }`}
//             >
//               {item.icon}
//               {item.name}
//             </button>
//           ))}
//         </nav>
//         <div className="mt-auto">
//           <button className="flex items-center justify-between w-full bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-md">
//             <div className="flex items-center">
//               <LogOut className="h-4 w-4 mr-2" />
//               Logout
//             </div>
//             <ChevronRight className="h-4 w-4" />
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-xl font-semibold">Todays Statistics</h2>
//             <p className="text-gray-500 text-sm">Tue, 14 Nov, 2022, 11:30 AM</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <Bell className="text-gray-500" />
//             <input
//               placeholder="Search here"
//               className="w-64 border px-2 py-1 rounded-md"
//             />
//             <Search className="text-gray-500" />
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-6 mb-6">
//           <div className="bg-white rounded-xl shadow p-4">
//             <h3 className="text-gray-500">Income</h3>
//             <p className="text-2xl font-bold">$9460.00</p>
//             <p className="text-red-500">↓ 1.5%</p>
//             <p className="text-sm text-gray-400">Last week Income $25658.00</p>
//           </div>
//           <div className="bg-white rounded-xl shadow p-4">
//             <h3 className="text-gray-500">Expenses</h3>
//             <p className="text-2xl font-bold">$5660.00</p>
//             <p className="text-green-500">↑ 2.5%</p>
//             <p className="text-sm text-gray-400">
//               Last week expenses $22658.00
//             </p>
//           </div>
//           <div className="bg-white rounded-xl shadow p-4">
//             <h3 className="text-gray-500 mb-2">Hire vs Cancel</h3>
//             <ResponsiveContainer width="100%" height={150}>
//               <PieChart>
//                 <Pie
//                   data={hireCancelData}
//                   dataKey="value"
//                   innerRadius={40}
//                   outerRadius={60}
//                 >
//                   {hireCancelData.map((entry, index) => (
//                     <Cell key={index} fill={entry.color} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>

//             {/* Custom legend with colors + arrows */}
//             <ul className="text-sm mt-2 space-y-1">
//               {hireCancelData.map((d, i) => (
//                 <li
//                   key={i}
//                   className={`flex items-center gap-2 font-medium
//           ${d.name === "Total Hired" ? "text-blue-600" : ""}
//           ${d.name === "Total Canceled" ? "text-green-600" : ""}
//           ${d.name === "Total Pending" ? "text-red-600" : ""}`}
//                 >
//                   {d.name}: {d.value}%
//                   {d.name === "Total Pending" ? (
//                     <ArrowDownRight className="h-4 w-4 text-red-600" />
//                   ) : (
//                     <ArrowUpRight className="h-4 w-4 text-green-600" />
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Car Availability & Live Car Status */}
//         <div className="bg-white rounded-xl shadow p-4 mb-6">
//           <div className="flex gap-4 items-center mb-4">
//             <input
//               placeholder="Car number"
//               className="w-40 border px-2 py-1 rounded-md"
//             />
//             <div className="flex items-center border rounded px-3 py-2 text-gray-500">
//               <Calendar className="h-4 w-4 mr-2" /> Nov 20, 2022
//             </div>
//             <div className="flex items-center border rounded px-3 py-2 text-gray-500">
//               <Clock className="h-4 w-4 mr-2" /> 10 AM
//             </div>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//               Check
//             </button>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-gray-600">
//                 <th className="p-2">No.</th>
//                 <th className="p-2">Car no.</th>
//                 <th className="p-2">Driver</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Earning</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {drivers.map((row, i) => (
//                 <tr key={i} className="border-b">
//                   <td className="p-2">{row.no}</td>
//                   <td className="p-2">{row.car}</td>
//                   <td className="p-2 flex items-center gap-2">
//                     <img
//                       src={row.img}
//                       alt={row.driver}
//                       className="w-8 h-8 rounded-full object-cover"
//                     />
//                     {row.driver}
//                   </td>
//                   <td
//                     className={`p-2 ${
//                       row.status === "Completed"
//                         ? "text-green-600"
//                         : row.status === "Pending"
//                         ? "text-blue-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     {row.status}
//                   </td>
//                   <td className="p-2">${row.earning}</td>
//                   <td className="p-2">
//                     <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
//                       Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Earning Summary */}
//         <div className="bg-white rounded-xl shadow p-4">
//           <h3 className="text-gray-500 mb-4">Earning Summary</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={earningsData}>
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="earnings"
//                 stroke="#3b82f6"
//                 strokeWidth={2}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;









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
