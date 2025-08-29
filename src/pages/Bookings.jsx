export default function Bookings() {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">📅 Booking Page</h1>
      <img
        src="https://img.icons8.com/fluency/96/booking.png"
        alt="Bookings"
        className="w-32 h-32 mb-6"
      />

      {/* Simple Booking List */}
      <div className="w-full max-w-md space-y-4">
        <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="font-semibold">Booking #1</h2>
          <p>Date: 2025-09-01</p>
          <p>Car: Tesla Model 3</p>
          <p>Status: ✅ Confirmed</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="font-semibold">Booking #2</h2>
          <p>Date: 2025-09-05</p>
          <p>Car: BMW X5</p>
          <p>Status: ⏳ Pending</p>
        </div>
      </div>
    </div>
  );
}
