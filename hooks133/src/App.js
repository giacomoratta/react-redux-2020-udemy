import React, { useState } from 'react';
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const accordionItems = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you user React?',
    content: 'You use React by creating components'
  }
];

const dropdownColorLabel = 'Select a color';
const dropdownColorOptions = [
  { label: 'The color red', value: 'red' },
  { label: 'The color green', value: 'green' },
  { label: 'A shade of blue', value: 'blue' }
];

// export default () => {
//   return (
//     <div>
//       <Accordion items={accordionItems} />
//     </div>
//   );
// }

// export default () => {
//   return (
//     <div>
//       <Search/>
//     </div>
//   );
// }


export default () => {
  const [selected, setSelected] = useState(dropdownColorOptions[0]);

  const [showDropdown, setShowDropdown] = useState(true);
  /* PROBLEM:  when showDropdown = false <Dropdown> is hidden and we get an error
   *           on the line ref.current.contains(event.target) because ref.current is null
   * SOLUTION: cleanup function in useEffect (for listener)!
   */


  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          label={dropdownColorLabel}
          options={dropdownColorOptions}
        /> : null
      }
    </div>
  );
}