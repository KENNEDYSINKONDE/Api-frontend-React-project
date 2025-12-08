import React from "react";

function ProjectSearch({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search projects..."
      onChange={handleChange}
      className=" border-violet-800 border-2 rounded-lg px-3 py-2 w-2/3"
    />
  );
}

export default ProjectSearch;
