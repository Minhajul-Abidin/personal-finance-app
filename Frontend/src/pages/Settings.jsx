import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaRegUser,
  FaRegFileAlt,
  FaHeadset,
  FaBuilding,
  FaLock,
  FaInfoCircle,
  FaCopy,
  FaWallet,
} from "react-icons/fa";
import { MdOutlineReceiptLong } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Settings() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showReferModal, setShowReferModal] = useState(false);
  const [referralLink] = useState("www.wisewealth.com");
  const [showReportModal, setShowReportModal] = useState(false);
  const [showAboutUsModal, setShowAboutUsModal] = useState(false);

  const handleSavePassword = () => {
    if (
      newPassword === confirmPassword &&
      newPassword.length >= 8 &&
      newPassword.length <= 32
    ) {
      setPasswordMessage("");
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        setShowPasswordModal(false);
        setNewPassword("");
        setConfirmPassword("");
      }, 2000);
    } else {
      setPasswordMessage(
        "Passwords do not match or are out of range (8-32 characters)"
      );
    }
  };

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  const investmentData = {
    labels: Array.from({ length: 21 }, (_, i) => `${i} yrs`),
    datasets: [
      {
        label: "Investment Growth (30% CAGR)",
        data: Array.from({ length: 21 }, (_, i) => 10000 * Math.pow(1.3, i)),
        borderColor: "#4CAF50",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6 pb-20 bg-gray-900 text-gray-100">
      <h2 className="text-3xl font-semibold mb-6 text-blue-400">Settings</h2>

      <div className="w-full overflow-y-auto p-4 bg-gray-800 shadow-xl rounded-xl custom-scrollbar">
        {/* Balance Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl mb-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">₹0.00</p>
              <p className="text-sm opacity-90 mt-1">Available Balance</p>
            </div>
            <FaWallet className="text-3xl opacity-90" />
          </div>
        </div>

        {/* Settings Grid */}
        <div className="grid gap-4">
          <SettingItem icon={MdOutlineReceiptLong} title="Order History" />
          <SettingItem icon={FaRegUser} title="Account Details" />
          <SettingItem
            icon={FaLock}
            title="Security Settings"
            onClick={() => setShowPasswordModal(true)}
          />
          <SettingItem icon={FaBuilding} title="Linked Institutions" />
          <SettingItem
            icon={IoIosHeartEmpty}
            title="Refer & Earn"
            button="Get ₹500"
            onClick={() => setShowReferModal(true)}
          />
          <SettingItem icon={FaHeadset} title="Priority Support" />
          <SettingItem
            icon={FaRegFileAlt}
            title="Financial Reports"
            onClick={() => setShowReportModal(true)}
          />
          <SettingItem
            icon={FaInfoCircle}
            title="Company Profile"
            onClick={() => setShowAboutUsModal(true)}
          />
        </div>
      </div>

      {/* Modals */}
      {showPasswordModal && (
        <Modal
          title="Security Settings"
          onClose={() => {
            setShowPasswordModal(false);
            setNewPassword("");
            setConfirmPassword("");
            setPasswordMessage("");
          }}
        >
          <div className="space-y-4">
            <input
              type="password"
              placeholder="New Password (8-32 characters)"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            />
            {passwordMessage && (
              <p className="text-sm text-red-400">{passwordMessage}</p>
            )}
            <button
              onClick={handleSavePassword}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              Update Security
            </button>
          </div>
        </Modal>
      )}

      {showReferModal && (
        <Modal
          title="Referral Program"
          onClose={() => setShowReferModal(false)}
        >
          <div className="space-y-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">Your referral link:</p>
              <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                <code className="text-blue-400 font-mono">{referralLink}</code>
                <button
                  onClick={handleCopyReferral}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FaCopy className="text-xl" />
                </button>
              </div>
            </div>
            <div className="bg-green-900/30 p-4 rounded-lg border border-green-600">
              <p className="text-green-400 text-sm">
                💰 Earn ₹500 for every successful referral. Share with friends
                and grow your investments together!
              </p>
            </div>
          </div>
        </Modal>
      )}

      {showReportModal && (
        <Modal
          title="Portfolio Growth Analysis"
          onClose={() => setShowReportModal(false)}
        >
          <div className="bg-gray-800 p-4 rounded-lg">
            <Line
              data={investmentData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    labels: { color: "#fff" },
                  },
                },
                scales: {
                  x: {
                    grid: { color: "#374151" },
                    ticks: { color: "#9CA3AF" },
                  },
                  y: {
                    grid: { color: "#374151" },
                    ticks: {
                      color: "#9CA3AF",
                      callback: (value) => `₹${Number(value).toLocaleString()}`,
                    },
                  },
                },
              }}
            />
          </div>
          <p className="text-gray-400 text-sm mt-4 text-center">
            Projected growth based on 30% annual returns. Past performance not
            indicative of future results.
          </p>
        </Modal>
      )}

      {showAboutUsModal && (
        <Modal
          title="About WiseWealth"
          onClose={() => setShowAboutUsModal(false)}
        >
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-300 text-center leading-relaxed">
                🚀 Empowering financial freedom through intelligent investing.
                WiseWealth combines cutting-edge technology with financial
                expertise to help you grow your wealth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-blue-400 font-medium mb-1">
                  Financial Literacy
                </p>
                <p className="text-gray-400">
                  Free educational resources for all users
                </p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-green-400 font-medium mb-1">Make in India</p>
                <p className="text-gray-400">
                  Proudly supporting domestic innovation
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {showSuccessPopup && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl animate-slide-up">
          🔒 Security settings updated successfully!
        </div>
      )}
    </div>
  );
}

const SettingItem = ({ icon: Icon, title, button, onClick }) => (
  <div
    onClick={onClick}
    className="flex justify-between items-center p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer group"
  >
    <div className="flex items-center space-x-4">
      {Icon && <Icon className="text-xl text-blue-400" />}
      <span className="text-gray-100 group-hover:text-white transition-colors">
        {title}
      </span>
    </div>
    {button && (
      <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-md text-sm hover:opacity-90 transition-opacity">
        {button}
      </button>
    )}
  </div>
);

// Add PropTypes validation for SettingItem
SettingItem.propTypes = {
  icon: PropTypes.elementType, // Validate that 'icon' is a valid React component
  title: PropTypes.string.isRequired, // 'title' is required and must be a string
  button: PropTypes.string, // 'button' is optional and must be a string
  onClick: PropTypes.func, // 'onClick' is optional and must be a function
};

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto custom-scrollbar border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-200 transition-colors"
        >
          ✕
        </button>
      </div>
      {children}
    </div>
  </div>
);

// Add PropTypes validation for Modal
Modal.propTypes = {
  title: PropTypes.string.isRequired, // 'title' is required and must be a string
  children: PropTypes.node.isRequired, // 'children' is required and can be any renderable node
  onClose: PropTypes.func.isRequired, // 'onClose' is required and must be a function
};
