import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Logo</Link>
      <Link to="/category/musikk">Musikk</Link>
      <Link to="/category/sport">Sport</Link>
      <Link to="/category/teater">Teater</Link>
      <Link to="/dashboard">Logg inn</Link>
    </nav>
  );
}
