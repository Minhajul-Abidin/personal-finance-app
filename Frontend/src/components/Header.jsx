function Header() {
  return (
    <div className="flex flex-row justify-between fixed w-full max-h-[4.4rem] px-6 py-3 bg-white shadow-md rounded-b-2xl sm:max-h-[5rem] sm:py-4">
      <div className="flex flex-row">
        <a href="/">Home</a>
      </div>
      <div className="flex flex-row">
        <a href="/settings">Settings</a>
        <a href="/profile">Profile</a>
      </div>
    </div>
  );
}

export default Header;
