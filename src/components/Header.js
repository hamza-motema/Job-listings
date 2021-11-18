import React from "react";
import FilterPanel from "./FilterPanel";

const Header = ({ selected, setSelected, selectedFilters }) => {
  const isSelectedEmpty = Object.values(selected).every(
    (currentValue) => currentValue.length === 0
  );

  return (
    <header>
      <div className="header"></div>
      {!isSelectedEmpty && (
        <FilterPanel
          selected={selected}
          setSelected={setSelected}
          selectedFilters={selectedFilters}
        />
      )}
    </header>
  );
};

export default Header;
