import "../Navbar/style.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
