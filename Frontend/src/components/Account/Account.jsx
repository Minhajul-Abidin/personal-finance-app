import "tailwindcss/tailwind.css";

function Account() {
  return (
    <div className="flex bg-blue-100 font-poppins w-screen">
      {/* Main Content */}
      <section className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">User Profile</h1>
        </div>

        {/* User Information */}
        <div className="bg-white p-6 rounded-2xl shadow-xl mt-6">
          <h2 className="text-xl font-semibold">Account Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-200 p-4 rounded-lg shadow-md">
              <h3 className="font-medium">Account Balance</h3>
              <p className="text-2xl font-bold mt-2">₹12,00,340.00</p>
            </div>
            <div className="bg-green-200 p-4 rounded-lg shadow-md">
              <h3 className="font-medium">Monthly Budget</h3>
              <p className="text-2xl font-bold mt-2">₹30,000.00</p>
              <p className="text-sm mt-1">Remaining: ₹10,200.00</p>
            </div>
            <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
              <h3 className="font-medium">Savings</h3>
              <p className="text-2xl font-bold mt-2">₹5,00,500.00</p>
              <p className="text-sm mt-1">Goal: ₹1,00,00,000.00</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions and Financial Goals Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Recent Transactions */}
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex justify-between">
                <span>Groceries</span>
                <span className="text-red-500">- ₹150.00</span>
              </li>
              <li className="flex justify-between">
                <span>Salary</span>
                <span className="text-green-500">+ ₹2,500.00</span>
              </li>
              <li className="flex justify-between">
                <span>Electricity Bill</span>
                <span className="text-red-500">- ₹120.00</span>
              </li>
              <li className="flex justify-between">
                <span>Gym Membership</span>
                <span className="text-red-500">- ₹45.00</span>
              </li>
            </ul>
          </div>

          {/* Financial Goals */}
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold">Financial Goals</h2>
            <div className="mt-4">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
                <h3 className="font-medium">Emergency Fund</h3>
                <p className="text-sm mt-1">
                  Progress: 60% - ₹6,000 of ₹10,000
                </p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="font-medium">Vacation Fund</h3>
                <p className="text-sm mt-1">Progress: 30% - ₹900 of ₹3,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Account;
