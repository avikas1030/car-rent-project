export default function Notifications() {
  const notifications = [
    { id: 1, message: "Your booking #123 has been confirmed ✅", time: "2h ago" },
    { id: 2, message: "Driver Rahul has updated his availability 🚗", time: "5h ago" },
    { id: 3, message: "Payment for booking #122 was successful 💳", time: "1d ago" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold flex items-center gap-2 mb-4">
        🔔 Notifications
      </h1>
      <div className="bg-white shadow-md rounded-xl p-4 space-y-3">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="p-3 border rounded-lg hover:bg-gray-50 transition"
          >
            <p className="text-gray-800">{note.message}</p>
            <span className="text-sm text-gray-500">{note.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
