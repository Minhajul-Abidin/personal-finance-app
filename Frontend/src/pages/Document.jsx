import { useState } from "react";

const Document = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle file input change
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setIsLoading(true); // Show loading state

    // Simulate document processing
    setTimeout(() => {
      setIsLoading(false); // Hide loading state
      alert(`Document "${file.name}" has been processed!`); // Simulate completion
      setFile(null); // Reset file input
    }, 3000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white pb-20">
      {/* Header */}
      <div className="bg-gray-800 p-4 border-b border-gray-700">
        <h1 className="text-xl font-semibold">
          Document Summarization & Analysis
        </h1>
      </div>

      {/* Upload Area */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-lg border-2 border-dashed border-gray-600 text-center max-w-md w-full">
          {/* Upload Icon */}
          <svg
            className="w-12 h-12 mx-auto text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            ></path>
          </svg>

          {/* Upload Text */}
          <p className="text-gray-400 mb-4">
            Drag & drop your document here or
          </p>

          {/* File Input */}
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileChange}
          />
          <label
            htmlFor="fileInput"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Browse Files
          </label>

          {/* Supported Formats */}
          <p className="text-gray-500 text-sm mt-4">
            Supported formats: PDF, DOC, DOCX, TXT
          </p>

          {/* Selected File Name */}
          {file && (
            <p className="text-gray-400 mt-4">
              Selected file: <span className="font-semibold">{file.name}</span>
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="bg-gray-800 p-4 border-t border-gray-700">
        <button
          onClick={handleSubmit}
          disabled={!file || isLoading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {isLoading ? "Processing..." : "Analyze Document"}
        </button>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <p className="text-xl font-semibold mb-4">
              Processing your document...
            </p>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Document;
