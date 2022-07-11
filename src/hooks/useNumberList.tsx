import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return

  const [list, setList] = useState(initialArray);

  const appendStart = (data: number) => {
    list.unshift(data);
    setList([...list]);
  };

  const appendEnd = (data: number) => {
    list.push(data);
    setList([...list]);
  };

  const popStart = () => {
    list.shift();
    setList([...list]);
  };

  const popEnd = () => {
    list.pop();
    setList([...list]);
  };

  const clear = () => {
    setList([]);
  };

  const reset = (arr:number[]) => {
    setList([...arr]);
  };

  return {
    list,
    appendStart,
    appendEnd,
    popStart,
    popEnd,
    clear,
    reset,
  };
};

export default useNumberList;
