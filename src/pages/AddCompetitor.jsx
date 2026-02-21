import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function AddCompetitor() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/competitors", {
      name,
      tags: [],
      pages: [{ type: "pricing", url }]
    });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
                      className="mr-4 px-4 py-2 bg-accent text-background hover:bg-muted rounded-lg transition"

          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold">Add Competitor</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border rounded-lg p-2"
            placeholder="Competitor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="w-full border rounded-lg p-2"
            placeholder="Website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
          >
            Add Competitor
          </button>
        </form>
      </div>
    </div>
  );
}