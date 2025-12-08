import React, { useEffect, useState } from "react";
import axios from "axios";

function Showstatuses() {
  const [status, setStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1.0/showstatuses")
      .then((response) => {
        setStatuses(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching statuses:", err);
        setError("Failed to fetch statuses");
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-gray-500 mt-6">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-6">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Statuses List</h2>

      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="p-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                />
              </th>
              <th className="px-6 py-3 font-medium text-gray-700">Status</th>
            </tr>
          </thead>

          <tbody>
            {status.length === 0 ? (
              <tr>
                <td colSpan="2" className="px-6 py-4 text-center text-gray-500">
                  No Statuses Found.
                </td>
              </tr>
            ) : (
              status.map((st, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                    />
                  </td>

                  <td
                    className={`px-6 py-4 font-semibold ${
                      st === "instock" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {st}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Showstatuses;
