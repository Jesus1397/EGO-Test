// src/components/FilterSection.tsx

import React from "react";
import { FilterSectionProps } from "../models/FilterModel";

const FilterSection: React.FC<FilterSectionProps> = ({
  filter,
  isDropdownOpen,
  isFilterDropdownOpen,
  handleFilterClick,
  handleSortChange,
  setIsDropdownOpen,
  setIsFilterDropdownOpen,
}) => {
  return (
    <div className="filter-section">
      <div className="filter-box d-none d-md-block">
        <span className="filter-span">Filtrar por:</span>
        {["Todos", "Autos", "Pickups y Comerciales", "SUVs"].map((f) => (
          <button
            key={f}
            className={`filter-button ${filter === f ? "active" : ""}`}
            onClick={() => handleFilterClick(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="dropdown dropend d-block d-md-none">
        <button
          className="btn sort-button"
          type="button"
          id="filterDropdownButton"
          aria-expanded={isFilterDropdownOpen ? "true" : "false"}
          onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
        >
          Filtrar por {""}
          <img
            src={isFilterDropdownOpen ? "/arrow-up.svg" : "/arrow-down.svg"}
            alt="Filter button"
            className="d-inline-block"
          />
        </button>
        <ul
          className={`dropdown-menu ${isFilterDropdownOpen ? "show" : ""}`}
          aria-labelledby="filterDropdownButton"
        >
          {["Todos", "Autos", "Pickups y Comerciales", "SUVs"].map((f) => (
            <li key={f}>
              <button
                className={`dropdown-item`}
                onClick={() => {
                  handleFilterClick(f);
                  setIsFilterDropdownOpen(false);
                }}
              >
                {f}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown dropstart">
        <button
          className="btn sort-button"
          type="button"
          id="dropdownMenuButton"
          aria-expanded={isDropdownOpen ? "true" : "false"}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Ordenar por {""}
          <img
            src={isDropdownOpen ? "/arrow-up.svg" : "/arrow-down.svg"}
            alt="Sort button"
            className="d-inline-block"
          />
        </button>
        <ul
          className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
          aria-labelledby="dropdownMenuButton"
        >
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSortChange("")}
            >
              Nada
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSortChange("price")}
            >
              De <strong>menor</strong> a <strong>mayor</strong> precio
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSortChange("price-desc")}
            >
              De <strong>mayor</strong> a <strong>menor</strong> precio
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSortChange("year-newest")}
            >
              Más <strong>nuevos</strong> primero
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSortChange("year-oldest")}
            >
              Más <strong>viejos</strong> primero
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;
