import React from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [toggled, setToggled] = React.useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid ps-md-4">
          <Link className="navbar-brand me-4" to="/">
            <img
              src="/logo.png"
              alt="Logo"
              width={38}
              height={40}
              className="d-inline-block align-text-top"
            />
          </Link>

          <button
            className="btn btn-menu navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=""
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setToggled(!toggled)}
          >
            Menú
            <img
              src="/menu.png"
              alt="menu"
              height={18}
              className="d-inline-block align-text-top ps-2 "
            />
          </button>
          <div className="collapse navbar-collapse ms-lg-5" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" || location.pathname === "/models"
                      ? "active underline"
                      : ""
                  }`}
                  to="/models"
                >
                  Modelos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname.startsWith("/car") ? "active" : ""
                  }`}
                  to="/car/1"
                >
                  Ficha de modelos
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item btn-sidebar">
                <button
                  className="btn btn-menu"
                  onClick={() => setToggled(!toggled)}
                >
                  Menú
                  <img
                    src="/menu.png"
                    alt="menu"
                    height={18}
                    className="d-inline-block align-text-top ps-2 ms-1"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Sidebar toggled={toggled} onClose={() => setToggled(false)} />
      <Backdrop show={toggled} onClick={() => setToggled(false)} />
    </>
  );
};

export default Navbar;
