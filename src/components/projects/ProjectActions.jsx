import React, { useState } from "react";
import { FaThumbsUp, FaEye, FaBell, FaStar } from "react-icons/fa";
import axios from "axios";

function ProjectActions({ project }) {

  const [counters, setCounters] = useState({
    likes: project.likes,
    views: project.views,
    subscribers: project.subscribers,
    rating: project.rating,
  });

  // general update helper
  const updateCounter = (key, value) => {
    setCounters((prev) => ({ ...prev, [key]: value }));
  };

  // like
  const like = async () => {
    const r = await axios.post(`/api/v1.0/projects/${project.id}/like`);
    updateCounter("likes", r.data.likes);
  };

  // view
  const addView = async () => {
    const r = await axios.post(`/api/v1.0/projects/${project.id}/view`);
    updateCounter("views", r.data.views);
  };

  // subscribe
  const subscribe = async () => {
    const r = await axios.post(`/api/v1.0/projects/${project.id}/subscribe`);
    updateCounter("subscribers", r.data.subscribers);
  };

  // rating stars
  const rate = async (value) => {
    const r = await axios.post(`/api/v1.0/projects/${project.id}/rate`, { rating: value });
    updateCounter("rating", r.data.rating);
  };

  return (
    <div className="flex gap-8 items-center text-lg mt-4">

      <button onClick={like} className="flex items-center gap-2">
        <FaThumbsUp className="text-blue-500" />
        <span>{counters.likes}</span>
      </button>

      <button onClick={addView} className="flex items-center gap-2">
        <FaEye className="text-gray-600" />
        <span>{counters.views}</span>
      </button>

      <button onClick={subscribe} className="flex items-center gap-2">
        <FaBell className="text-yellow-500" />
        <span>{counters.subscribers}</span>
      </button>

      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <FaStar
            key={n}
            size={22}
            onClick={() => rate(n)}
            className={
              counters.rating >= n 
                ? "text-yellow-500 cursor-pointer"
                : "text-gray-300 cursor-pointer"
            }
          />
        ))}
      </div>

    </div>
  );
}

export default ProjectActions;
