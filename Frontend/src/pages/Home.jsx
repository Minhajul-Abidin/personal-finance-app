function Home() {
  return (
    <div className="bg-gray-900 text-white scroll-smooth pb-20">
      {/* <!-- Main Chat Container --> */}
      <div className="flex flex-col h-screen">
        {/* <!-- Header --> */}
        {/* <div className="bg-gray-800 p-4 border-b border-gray-700">
          <h1 className="text-xl font-semibold">Chat Bot</h1>
        </div> */}

        {/* <!-- Chat Messages Area --> */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* <!-- Bot Message --> */}
          <div className="flex">
            <div className="bg-gray-700 p-3 rounded-lg max-w-[70%]">
              <p>Hello! How can I assist you today?</p>
            </div>
          </div>

          {/* <!-- User Message --> */}
          <div className="flex justify-end">
            <div className="bg-blue-600 p-3 rounded-lg max-w-[70%]">
              <p>Hi, I need help with something.</p>
            </div>
          </div>

          {/* <!-- Bot Message --> */}
          <div className="flex">
            <div className="bg-gray-700 p-3 rounded-lg max-w-[70%]">
              <p>
                Sure! I&apos;m here to help. What do you need assistance with?
              </p>
            </div>
          </div>

          {/* <!-- User Message --> */}
          <div className="flex justify-end">
            <div className="bg-blue-600 p-3 rounded-lg max-w-[70%]">
              <p>Can you explain how Tailwind CSS works?</p>
            </div>
          </div>
        </div>

        {/* <!-- Input Area --> */}
        <div className="bg-gray-800 p-4 border-t border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
