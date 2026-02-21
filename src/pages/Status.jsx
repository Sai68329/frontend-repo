import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Status() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    try {
      const res = await API.get("/status");
      setStatus(res.data);
    } catch (err) {
      console.error("Status API Error:", err.message);
      setError("Failed to load system status");
    }
  };

  if (error)
    return <p className="p-10 text-red-600">{error}</p>;

  if (!status)
    return <p className="p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="mr-4 px-4 py-2 bg-accent text-background hover:bg-muted rounded-lg transition"
        >
          ← Back
        </button>
        <h2 className="text-3xl font-bold">System Status</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(status).map(([key, value]) => (
          <div
            key={key}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <h3 className="text-xl font-semibold capitalize">
              {key}
            </h3>
            <p
              className={`mt-2 font-bold ${
                value === "connected" || value === "ok"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}