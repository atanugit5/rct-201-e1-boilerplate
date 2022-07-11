import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  return (
    <div className="App">
      {/* Clock */}
      <Clock />

      <div style={{display:"flex",margin:"auto",justifyContent:"center"}}>
        <div style={{border:"1px solid black",padding:"20px"}}>
          {/* List 1  initialValues [1, 2, 3] */}
          <List1 label="List-1" initalValues={[1, 2, 3]} />
        </div>
        <div style={{border:"1px solid black",padding:"20px"}}>
          {/* List 2  initialValues [4, 5] */}
          <List2 label="List-2" initalValues={[4, 5]} />
        </div>
      </div>
    </div>
  );
}

export default App;
