import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
  label: string;
  initalValues: number[];
};
const List1 = (props: List1Props) => {
  const [value, setValue] = useState<number>(0);
  const { list, appendStart, popEnd, clear, reset } = useNumberList(
    props.initalValues
  );

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">
        {/* Label */}
        {props.label}
      </h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element">
        {/* Each element in a list */}
        {list.map((el, i) => (
          <span key={i} style={{ marginRight: "10px" }}>
            {el}
          </span>
        ))}
      </div>

      <input
        data-testid="list1-input"
        type={"number"}
        value={value}
        onChange={handleChange}
      />
      <button
        data-testid="list1-btn-append-start"
        onClick={() => appendStart(value)}
      >
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button data-testid="list1-btn-pop-end" onClick={() => popEnd()}>
        {/* po last element btn */}
        Pop End
      </button>
      <button data-testid="list1-btn-clear" onClick={() => clear()}>
        {/* clear list and set empty button */}
        Clear
      </button>
      <button data-testid="list1-btn-reset" onClick={() => reset([1, 2, 3])}>
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;
