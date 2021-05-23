import React, { useEffect, useState } from "react";

const people = ["John", "Jacob", "Jingle", "Heimer", "Schmitt"];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    const results = searchResults.filter((result) =>
      result.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <input 
      type="text" 
      placeholder="search" 
      value={searchTerm}
      onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
          <div>
            <li>{item}</li>
            <button onClick>Add Class</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
