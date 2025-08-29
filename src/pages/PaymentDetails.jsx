export default function PaymentDetails() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">💳 Payment Details</h1>
      
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4 max-w-lg">
        <div>
          <label className="block text-gray-600 text-sm mb-1">Card Holder Name</label>
          <input
            type="text"
            placeholder="Enter card holder name"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm mb-1">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-600 text-sm mb-1">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-600 text-sm mb-1">CVV</label>
            <input
              type="password"
              placeholder="•••"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Save Payment Details
        </button>
      </div>
    </div>
  );
}
