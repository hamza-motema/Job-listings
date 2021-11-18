import React from "react";

const FilterPanel = ({ selected, setSelected, selectedFilters }) => {
  const renderSelected = () => {
    const items = [];
    for (const [key, value] of Object.entries(selected)) {
      value.forEach((el) => {
        items.push(
          <li className="button" key={el}>
            <span className="">{el}</span>
            <button
              // remove filter element from selected
              onClick={() => {
                setSelected({
                  ...selected,
                  [key]: selected[key].filter((item) => item !== el),
                });
              }}
              aria-label={`delete ${el} filter`}
              className="cross"
            >
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
              >
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                />
              </svg>
            </button>
          </li>
        );
      });
    }
    return items;
  };

  return (
    <div className="panel">
      <ul className="items">{renderSelected()}</ul>
      <button
        onClick={() => {
          setSelected(selectedFilters);
        }}
        className="clear-btn"
      >
        Clear
      </button>
    </div>
  );
};

export default FilterPanel;
