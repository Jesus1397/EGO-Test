import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar: React.FC<{ toggled: boolean; onClose: () => void }> = ({
  toggled,
  onClose,
}) => {
  return (
    <div className={`sidebar ${toggled ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        Cerrar
        <img
          src="/cerrar.svg"
          alt="Logo"
          width={15}
          height={15}
          className="d-inline-block ms-2"
        />
      </button>
      <br />
      <ul>
        <li>
          <Link to="/models" onClick={onClose}>
            Modelos
          </Link>
        </li>
        <li>
          <Link to="/models" onClick={onClose}>
            Servicios y Accesorios
          </Link>
        </li>
        <li>
          <Link to="/models" onClick={onClose}>
            Financiación
          </Link>
        </li>
        <li>
          <Link to="/models" onClick={onClose}>
            Reviews y Comunidad
          </Link>
        </li>
        <hr className="divider" />
        <li>
          <Link to="/models" onClick={onClose}>
            Toyota Mobility Service
          </Link>
        </li>
        <li>
          <Link to="/models" onClick={onClose}>
            Toyota Gazoo Racing
          </Link>
        </li>
        <li>
          <Link to="/models" onClick={onClose}>
            Toyota Híbridos
          </Link>
        </li>
        <hr className="divider" />
        <li>
          <Link to="/models" onClick={onClose}>
            Concesionarios
          </Link>
        </li>
        <li>
          <Link to="/models" onClick={onClose}>
            Test Drive
          </Link>
        </li>
        <li>
          <Link to="/models" onClick={onClose}>
            Contacto
          </Link>
        </li>
      </ul>
      <ul className="extras">
        <li>
          <Link to="/models" onClick={onClose}>
            Actividades
          </Link>
        </li>
        <li>
          <Link to="/car/1">Servicios al Cliente</Link>
        </li>
        <li>
          <Link to="/models" onClick={onClose}>
            Ventas Especiales
          </Link>
        </li>
        <li>
          <Link to="/models" onClick={onClose}>
            Innovación
          </Link>
        </li>
        <li>
          <Link to="/models" onClick={onClose}>
            Prensa
          </Link>
        </li>
        <li>
          <Link to="/models" onClick={onClose}>
            Acerca de...
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
