export default function Settings() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
        alt="Settings"
        className="w-24 h-24 mb-4"
      />
      <h1 className="text-3xl font-bold text-gray-800">⚙️ Settings Page</h1>
      <p className="text-gray-600 mt-2">
        Manage your preferences, account details, and app configurations here.
      </p>
    </div>
  );
}
