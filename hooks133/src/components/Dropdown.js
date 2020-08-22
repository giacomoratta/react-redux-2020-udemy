import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  /* close dropdown when click outside
   * unfortunately... dropdown closes but it stays open when we click on options! :(
   *
   * 1. event listeners with addEventListener are triggered first
   * 2. event listeners via React come after
   * 3. possible solution: differentiate events by source
   *    - inside dropdown: work as we do open/close
   *    - outside dropdown: close dropdown menu
   *    --> so we need to detect which element has been clicked
   *    --> useRef used for this solution
  */

  /* - see ref={ref} on the first <div>
   * - ref.current = reference to div
   */
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if(ref.current.contains(event.target)) return; // solution (see 3.)
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick);

    return () => { /* called before new rendering, in particular before being removed from the DOM */
      document.body.removeEventListener('click', onBodyClick);
    };
  }, [] /* one time */);

  const renderedOptions = options
    .filter((option) => { return option.value !== selected.value })
    .map((option) => {
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active': ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition': ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;