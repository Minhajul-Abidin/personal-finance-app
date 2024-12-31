import { useState } from "react";

function Index() {
  const [messages, setMessages] = useState([
    { text: "Hi, What financial advice do you need?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default action (like a form submission if inside a form)
      handleSend();
    }
  };

  return (
    <div className="flex-grow">
      <div className="flex justify-center items-center h-screen bg-[#EEEEEE]">
        {/* Increased width and height more */}
        <div className="w-full max-w-4xl h-[700px] rounded-lg p-2">
          {/* Header */}
          <div className="bg-[#134B70] text-black p-8 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <i className="fas fa-user"></i> {/* User icon */}
            </div>
          </div>

          {/* Chat Window */}
          <div className="p-8 h-[500px] overflow-y-auto bg-dark-purple text-yellow-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-3 p-4 rounded-md max-w-2xl ${
                  msg.sender === "user"
                    ? "ml-auto bg-[#89c4d4] text-black"
                    : "mr-auto bg-[#508C9B] text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="bg-[#134B70] p-8 flex items-center rounded-b-lg">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              onClick={handleSend}
              className="ml-4 bg-yellow-500 text-black px-8 py-4 rounded-lg hover:bg-yellow-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
