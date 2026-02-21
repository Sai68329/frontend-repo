import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-background px-8 py-4 flex justify-between shadow-md">
      <h1 className="text-xl font-bold tracking-wide">
        CI Tracker
      </h1>

      <div className="space-x-6 font-medium">
        <Link to="/" className="hover:text-highlight transition">
          Home
        </Link>
        <Link to="/dashboard" className="hover:text-highlight transition">
          Dashboard
        </Link>
        <Link to="/add" className="hover:text-highlight transition">
          Add
        </Link>
        <Link to="/status" className="hover:text-highlight transition">
          Status
        </Link>
      </div>
    </nav>
  );
}