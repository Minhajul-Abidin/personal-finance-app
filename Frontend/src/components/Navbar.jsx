function Navbar() {
  return (
    <div className="fixed bottom-0 w-full bg-gray-800">
      <nav className="flex justify-between items-center p-4">
        <a href="/" className="text-white">
          Home
        </a>
        <a href="#" className="text-white">
          About
        </a>
        <a href="#" className="text-white">
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
