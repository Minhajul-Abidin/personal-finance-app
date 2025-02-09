import React from "react";

const Profile = () => {
  // Dummy data (Replace this with actual data from your backend)
  const income = 50000; // Example income
  const expenses = 20000; // Example total expenses
  const balance = income - expenses;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-blue-500"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
          <p className="text-gray-500">@johndoe</p>
        </div>

        {/* Income & Expense Summary */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Income & Expense Summary</h3>
          <div className="mt-2 bg-gray-200 p-4 rounded-lg">
            <p className="text-green-600 font-semibold">Income: ₹{income}</p>
            <p className="text-red-600 font-semibold">Expenses: ₹{expenses}</p>
            <hr className="my-2" />
            <p className={`font-semibold ${balance >= 0 ? "text-green-700" : "text-red-700"}`}>
              Balance: ₹{balance}
            </p>
          </div>
        </div>

        {/* Settings */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Settings</h3>
          <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Edit Profile
          </button>
          <button className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
