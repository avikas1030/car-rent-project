// 

import { useState } from "react";
import { Search, UserPlus } from "lucide-react";

export default function Drivers() {
  const [search, setSearch] = useState("");
  const drivers = [
    { id: 1, name: "Rahul Sharma", license: "DL-09-1234", phone: "9876543210" },
    { id: 2, name: "Amit Verma", license: "DL-10-5678", phone: "9876501234" },
    { id: 3, name: "Sunil Kumar", license: "DL-11-9876", phone: "9876004321" },
  ];

  const filteredDrivers = drivers.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          🚗 Drivers
        </h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          <UserPlus size={18} /> Add Driver
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 mb-4 border rounded-lg px-3 py-2 shadow-sm bg-white">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search driver..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none flex-1"
        />
      </div>

      {/* Drivers List */}
      <div className="overflow-x-auto rounded-lg shadow bg-white">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">License</th>
              <th className="p-3">Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredDrivers.length > 0 ? (
              filteredDrivers.map((driver, index) => (
                <tr
                  key={driver.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 font-medium">{driver.name}</td>
                  <td className="p-3">{driver.license}</td>
                  <td className="p-3">{driver.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No drivers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
