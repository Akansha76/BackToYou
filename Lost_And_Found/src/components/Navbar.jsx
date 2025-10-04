import { Link } from "react-router-dom";
import { Search, Settings, LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <Search className="w-5 h-5" />
        <span className="text-xl font-bold tracking-wide">
          <span className="text-white">B</span>
          <span className="text-indigo-500">ack2</span>
          <span className="text-white">You</span>
        </span>
      </div>

      {/* Center: Nav Links */}
      <div className="flex-2 flex justify-center">
        <div className="flex items-center space-x-20 font-medium">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/found-items" className="hover:text-indigo-400 transition">Found Items</Link>
          <Link to="/lost-items" className="hover:text-indigo-400 transition">Lost Items</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">About Us</Link>
        </div>
      </div>

      {/* Right: Settings + Auth Buttons */}
      <div className="flex items-center gap-3">
        
        <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 text-sm font-semibold">
          SIGN UP
        </Link>
        <Link to="/login" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 text-sm font-semibold flex items-center gap-1">
          <LogIn className="w-4 h-4" />
          LOGIN
        </Link>
        {/* <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
          <Settings className="w-5 h-5" />
        </button> */}
      </div>
    </nav>
  );
}
