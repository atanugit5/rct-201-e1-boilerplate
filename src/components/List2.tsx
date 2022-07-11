import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  label: string;
  initalValues: number[];
};
const List2 = (props: List2Props) => {
  const [value, setValue] = useState<number>(0);
  const { list, appendEnd, popStart, clear, reset } = useNumberList(
    props.initalValues
  );

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">
        {/* Label */}
        {props.label}
      </h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">
        {/* Each element in a list */}
        {list.map((el, i) => (
          <span key={i} style={{ marginRight: "10px" }}>
            {el}
          </span>
        ))}
      </div>

      <input
        data-testid="list2-input"
        type={"number"}
        value={value}
        onChange={handleChange}
      />
      <button
        data-testid="list2-btn-append-end"
        onClick={() => appendEnd(value)}
      >
        {/* Button to append new number to the end of the list */}
        Append End
      </button>
      <button data-testid="list2-btn-pop-start" onClick={() => popStart()}>
        {/* Button to  pop first element of the list */}
        Pop Start
      </button>
      <button data-testid="list2-btn-clear" onClick={() => clear()}>
        {/* Button to  clear the list */}
        Clear
      </button>
      <button data-testid="list2-btn-reset" onClick={() => reset([4, 5])}>
        {/* Button to  reset the list to initialValue */}
        Reset
      </button>
    </div>
  );
};

export default List2;

// list
// appendStart
// appendEnd
// popStart
// popEnd
// clear
// reset
