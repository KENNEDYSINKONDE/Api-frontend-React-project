import React, { useState } from "react";

function ProductSearch({ onSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value); // trigger search hook
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search products..."
        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
}

export default ProductSearch;
