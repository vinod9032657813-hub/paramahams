
import React, { useState } from "react";
import Mongo from "./Mongo";

export default function Copy() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select a Fruit</h2>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">Business</option>
        <option value="apple">cotton</option>
        <option value="banana">profit</option>
        <option value="orange">express</option>
        <option value="charts">charts</option>
      </select>

      {selectedValue && <p>this will be printed<Mongo/></p>}
    </div>
  );
}



    <div >
      
      <select value={selectedValue}  onChange={handleChange}>
      
        <option value="">Business</option> 
        <option >cotton</option>
        <option>profit</option>
        <option>express</option>
             
      </select>
       
</div>
</div>
      {selectedValue=="cotton" ? <p><Cotton/></p>:""}
      {selectedValue=="profit" ? <p>this is profit one</p>:""}
      {selectedValue=="express" ? <p>this is express one</p>:""}
    </div>


