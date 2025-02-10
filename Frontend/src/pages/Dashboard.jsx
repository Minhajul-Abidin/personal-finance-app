import { useState } from "react";

const Dashboard = () => {
  const [investmentData] = useState([
    { category: "Stocks", amount: 5000 },
    { category: "Mutual Funds", amount: 3000 },
    { category: "Bonds", amount: 2000 },
    { category: "Real Estate", amount: 7000 },
  ]);

  return (
    <div className="p-6 min-h-screen bg-black text-white">
      <h2 className="text-3xl font-semibold mb-6">Finance Dashboard</h2>

      {/* Account Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Checking Account</h3>
          <p className="text-green-400 text-lg">$12,500</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Savings Account</h3>
          <p className="text-green-400 text-lg">$8,200</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Investments</h3>
          <p className="text-green-400 text-lg">$25,000</p>
        </div>
      </div>

      {/* Budget Tracking */}
      <div className="bg-gray-900 p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Budget Tracking</h3>
        <p>Monthly Spending: <span className="text-red-400">$3,200</span> / $4,000</p>
      </div>

      {/* Expense Categorization */}
      <div className="bg-gray-900 p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Expense Categorization</h3>
        <p>Food: $800 | Rent: $1,200 | Entertainment: $300 | Transport: $400</p>
      </div>

      {/* Bar Graph for Earnings vs Investments */}
      <div className="bg-gray-900 p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Earnings vs. Investments</h3>
        <div className="flex space-x-4">
          {investmentData.map((item, index) => (
            <div key={index} className="w-1/4 bg-green-500 text-center p-2 rounded">
              <p className="text-lg font-bold">{item.category}</p>
              <div className="h-20 w-full bg-green-700 mt-2" style={{ height: `${item.amount / 100}px` }}></div>
              <p className="text-sm">${item.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Goals */}
      <div className="bg-gray-900 p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Financial Goals</h3>
        <ul>
          <li>🏡 Save for a House: 40% completed</li>
          <li>🚗 Buy a Car: 20% completed</li>
          <li>✈️ Travel Fund: 70% completed</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
