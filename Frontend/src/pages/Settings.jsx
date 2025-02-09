import { useState } from "react";
import { FaRegUser, FaRegFileAlt, FaHeadset, FaBuilding, FaLock, FaInfoCircle, FaCopy } from "react-icons/fa";
import { MdOutlineReceiptLong } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
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
    if (newPassword === confirmPassword && newPassword.length >= 8 && newPassword.length <= 32) {
      setPasswordMessage("");
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        setShowPasswordModal(false);
        setNewPassword("");
        setConfirmPassword("");
      }, 2000);
    } else {
      setPasswordMessage("Passwords do not match or are out of range (8-32 characters)");
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
      },
    ],
  };

  return (
    <div className={`p-6 min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <h2 className="text-3xl font-semibold mb-6">Settings</h2>
      <div className="max-h-[80vh] overflow-y-auto p-4 bg-white shadow-md rounded-lg custom-scrollbar">
        <div className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-lg mb-6">
          <div>
            <p className="text-xl font-medium">₹0.00</p>
            <p className="text-sm opacity-80">Available Balance</p>
          </div>
        </div>
        <SettingItem icon={MdOutlineReceiptLong} title="Orders" />
        <SettingItem icon={FaRegUser} title="Account Details" />
        <SettingItem icon={FaLock} title="Change Password" onClick={() => setShowPasswordModal(true)} />
        <SettingItem icon={FaBuilding} title="Banks & Mandates" />
        <SettingItem icon={IoIosHeartEmpty} title="Refer" button="Invite" onClick={() => setShowReferModal(true)} />
        <SettingItem icon={FaHeadset} title="Customer Support 24x7" />
        <SettingItem icon={FaRegFileAlt} title="Reports" onClick={() => setShowReportModal(true)} />
        <SettingItem icon={FaInfoCircle} title="About Us" onClick={() => setShowAboutUsModal(true)} />
      </div>

      {showPasswordModal && (
        <Modal title="Change Password" onClose={() => { setShowPasswordModal(false); setNewPassword(""); setConfirmPassword(""); setPasswordMessage(""); }}>
          <input
            type="password"
            placeholder="New Password (8-32 characters)"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded mb-3"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded mb-3"
          />
          {passwordMessage && <p className="text-sm text-red-500">{passwordMessage}</p>}
          <button onClick={handleSavePassword} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        </Modal>
      )}

      {showReferModal && (
        <Modal title="Referral Link" onClose={() => setShowReferModal(false)}>
          <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm">
            <span className="text-lg">{referralLink}</span>
            <FaCopy className="text-xl cursor-pointer" onClick={handleCopyReferral} />
          </div>
        </Modal>
      )}

      {showReportModal && (
        <Modal title="Investment Growth Report" onClose={() => setShowReportModal(false)}>
          <Line data={investmentData} />
        </Modal>
      )}

      {showAboutUsModal && (
        <Modal title="About Us" onClose={() => setShowAboutUsModal(false)}>
          <p className="text-gray-700 text-center text-lg mb-4">WiseWealth is dedicated to empowering individuals with financial knowledge and investment strategies. We actively contribute to society by promoting financial literacy and supporting the Make in India initiative.</p>
          <p className="text-gray-600 text-center">Join us in building a stronger financial future for everyone.</p>
        </Modal>
      )}
    </div>
  );
}

const SettingItem = ({ icon: Icon, title, button, onClick }) => (
  <div onClick={onClick} className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm cursor-pointer">
    <div className="flex items-center space-x-3">
      {Icon && <Icon className="text-xl" />}
      <span className="text-lg">{title}</span>
    </div>
    {button && <button className="bg-green-500 text-white px-3 py-1 rounded-lg">{button}</button>}
  </div>
);

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-y-auto custom-scrollbar">
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      {children}
      <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full">Close</button>
    </div>
  </div>
);
