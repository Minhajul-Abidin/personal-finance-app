import {
  FaPiggyBank,
  FaCreditCard,
  FaChartLine,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";
import { MdSecurity, MdAccountBalance } from "react-icons/md";

const Profile = () => {
  // Dummy data
  const user = {
    name: "John Doe",
    username: "@johndoe",
    income: 75000,
    expenses: 32500,
    balance: 42500,
    accountNumber: "•••• 6789",
    creditLimit: 150000,
    netWorth: 582000,
  };

  const financialGoals = [
    { name: "Emergency Fund", target: 100000, current: 65000 },
    { name: "Vacation Fund", target: 50000, current: 12500 },
  ];

  const recentTransactions = [
    { id: 1, category: "Food", amount: -1200, date: "2024-03-15" },
    { id: 2, category: "Salary", amount: 75000, date: "2024-03-01" },
    { id: 3, category: "Shopping", amount: -4500, date: "2024-03-14" },
  ];

  return (
    <div className="bg-gray-900 p-4 pb-20 sm:p-6">
      <div className="w-full mx-auto pb-20 bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Profile Header */}
        <div className="p-6 bg-gray-700 flex items-center gap-4">
          <img
            className="w-16 h-16 rounded-full border-4 border-blue-500"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div>
            <h2 className="text-2xl font-bold text-white">{user.name}</h2>
            <p className="text-gray-400">{user.username}</p>
            <div className="flex items-center gap-2 mt-1">
              <MdAccountBalance className="text-blue-400" />
              <span className="text-gray-300 text-sm">
                Net Worth: ₹{user.netWorth.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* Financial Snapshot */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <FaChartLine className="text-blue-400" /> Financial Snapshot
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-green-400 font-semibold">Income</p>
                <p className="text-white text-2xl">
                  ₹{user.income.toLocaleString()}
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-red-400 font-semibold">Expenses</p>
                <p className="text-white text-2xl">
                  ₹{user.expenses.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Financial Goals */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <FaPiggyBank className="text-blue-400" /> Financial Goals
            </h3>
            {financialGoals.map((goal, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-white">{goal.name}</span>
                  <span className="text-blue-400">
                    ₹{goal.current.toLocaleString()}/₹
                    {goal.target.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(goal.current / goal.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Transactions */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <FaCreditCard className="text-blue-400" /> Recent Transactions
            </h3>
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="bg-gray-700 p-4 rounded-lg flex items-center justify-between hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gray-600">
                      {transaction.amount > 0 ? (
                        <FaChartLine className="text-green-400" />
                      ) : transaction.category === "Food" ? (
                        <FaUtensils className="text-red-400" />
                      ) : (
                        <FaShoppingCart className="text-yellow-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-white">{transaction.category}</p>
                      <p className="text-gray-400 text-sm">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`font-semibold ${
                      transaction.amount > 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    ₹{Math.abs(transaction.amount).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Account Security */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <MdSecurity className="text-blue-400" /> Account Security
            </h3>
            <div className="bg-gray-700 p-4 rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Linked Account</span>
                <span className="text-white">
                  •••• {user.accountNumber.slice(-4)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Credit Limit</span>
                <span className="text-white">
                  ₹{user.creditLimit.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <FaPiggyBank /> New Goal
            </button>
            <button className="bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition-colors">
              View Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
