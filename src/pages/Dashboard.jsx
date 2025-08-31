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
//   ArrowUpRight,
//   ArrowDownRight,
// } from "lucide-react";

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

// const drivers = [
//   {
//     no: 1,
//     car: 6465,
//     driver: "Alex Noman",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//     status: "Completed",
//     earning: 35.44,
//   },
//   {
//     no: 2,
//     car: 5665,
//     driver: "Razib Rahman",
//     img: "https://randomuser.me/api/portraits/men/45.jpg",
//     status: "Pending",
//     earning: 0,
//   },
//   {
//     no: 3,
//     car: 1755,
//     driver: "Luke Norton",
//     img: "https://randomuser.me/api/portraits/men/51.jpg",
//     status: "In route",
//     earning: 23.5,
//   },
// ];

// function Dashboard() {
//   return (
//     <div>
//       {/* keep all your dashboard UI code here exactly as before */}
//       {/* ... your header, stats, pie chart, drivers table, earnings summary */}
//     </div>
//   );
// }

// export default Dashboard;




import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Search,
  Bell,
  Calendar,
  Clock,
  CalendarCheck,
} from "lucide-react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const hireCancelData = [
  { name: "Total Hired", value: 54, color: "#3b82f6" },
  { name: "Total Canceled", value: 20, color: "#22c55e" },
  { name: "Total Pending", value: 26, color: "#ef4444" },
];

const earningsData = [
  { month: "May", earnings: 200 },
  { month: "Jun", earnings: 150 },
  { month: "Jul", earnings: 180 },
  { month: "Aug", earnings: 220 },
  { month: "Sep", earnings: 190 },
  { month: "Oct", earnings: 240 },
];

function App() {
  const drivers = [
    {
      no: 1,
      car: 6465,
      driver: "Alex Noman",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      status: "Completed",
      earning: 35.44,
    },
    {
      no: 2,
      car: 5665,
      driver: "Razib Rahman",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      status: "Pending",
      earning: 0,
    },
    {
      no: 3,
      car: 1755,
      driver: "Luke Norton",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
      status: "In route",
      earning: 23.5,
    },
  ];

  return (
    <div className="h-screen w-full bg-gray-100">
      
      <div className="p-6 h-full overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Today's Statistics</h2>
            <p className="text-gray-500 text-sm">Fri, 14 Aug, 2025, 06:30 PM</p>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="text-gray-500" />
            <div className="relative">
              <input
                placeholder="Search here"
                className="w-64 border px-2 py-1 rounded-md"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Search className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-gray-500">Income</h3>
            <p className="text-2xl font-bold">$9460.00</p>
            <p className="text-red-500">↓ 1.5%</p>
            <p className="text-sm text-gray-400">Last week Income $25658.00</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-gray-500">Expenses</h3>
            <p className="text-2xl font-bold">$5660.00</p>
            <p className="text-green-500">↑ 2.5%</p>
            <p className="text-sm text-gray-400">
              Last week expenses $22658.00
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-gray-500 mb-2">Hire vs Cancel</h3>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={hireCancelData}
                  dataKey="value"
                  innerRadius={40}
                  outerRadius={60}
                >
                  {hireCancelData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Custom legend with colors + arrows */}
            <ul className="text-sm mt-2 space-y-1">
              {hireCancelData.map((d, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 font-medium
          ${d.name === "Total Hired" ? "text-blue-600" : ""}
          ${d.name === "Total Canceled" ? "text-green-600" : ""}
          ${d.name === "Total Pending" ? "text-red-600" : ""}`}
                >
                  <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                  <span>{d.name}: {d.value}%</span>
                  {d.name === "Total Pending" ? (
                    <ArrowDownRight className="h-4 w-4 text-red-600" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-green-600" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Car Availability & Live Car Status */}
        <div className="bg-white rounded-xl shadow p-4 mb-6">
          <div className="flex gap-4 items-center mb-4">
            <input
              placeholder="Car number"
              className="w-40 border px-2 py-1 rounded-md"
            />
            <div className="flex items-center border rounded px-3 py-2 text-gray-500">
              <Calendar className="h-4 w-4 mr-2" /> Aug 29, 2025
            </div>
            <div className="flex items-center border rounded px-3 py-2 text-gray-500">
              <Clock className="h-4 w-4 mr-2" /> 08 PM
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Check
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="p-2">No.</th>
                  <th className="p-2">Car no.</th>
                  <th className="p-2">Driver</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Earning</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2">{row.no}</td>
                    <td className="p-2">{row.car}</td>
                    <td className="p-2 flex items-center gap-2">
                      <img
                        src={row.img}
                        alt={row.driver}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      {row.driver}
                    </td>
                    <td
                      className={`p-2 ${
                        row.status === "Completed"
                          ? "text-green-600"
                          : row.status === "Pending"
                          ? "text-blue-600"
                          : "text-red-600"
                      }`}
                    >
                      {row.status}
                    </td>
                    <td className="p-2">${row.earning}</td>
                    <td className="p-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Earning Summary */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-gray-500 mb-4">Earning Summary</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={earningsData}>
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${value}k`}/>
              <Tooltip formatter={(value) => `${value}k`}/>
              <Line
                type="monotone"
                dataKey="earnings"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default App;

