import { useState } from "react";

function UnOrdered() {
  let items = ["sans francisco", "new york", "california"];
  //hook
  const [selectedIndex, setSelectedIndex]=useState(-1);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={()=>{setSelectedIndex(index)}}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default UnOrdered;
