import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [competitors, setCompetitors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCompetitors();
  }, []);

  const fetchCompetitors = async () => {
    const res = await API.get("/competitors");
    setCompetitors(res.data);
  };

  const runCheck = async (id) => {
    await API.post(`/check/${id}`);
    alert("Check completed");
  };

  const deleteCompetitor = async (id) => {
    await API.delete(`/competitors/${id}`);
    fetchCompetitors();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {competitors.map((comp) => (
          <div
            key={comp._id}
            className="bg-accent text-background shadow-lg rounded-2xl p-6 hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold mb-4">{comp.name}</h3>

            <div className="flex space-x-3">
              <button
                onClick={() => runCheck(comp._id)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Check Now
              </button>

              <button
                onClick={() => navigate(`/history/${comp._id}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                History
              </button>

              <button
                onClick={() => deleteCompetitor(comp._id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}