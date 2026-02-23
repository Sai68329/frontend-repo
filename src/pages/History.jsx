import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";

export default function History() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);
// API.get(`/history/${id}`)
  const fetchHistory = async () => {
    try {
      // const res = await API.get(`/history/${id}`)
      const res = await API.get(`/check/history/${id}`);
      setHistory(res.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  const getImpactBadge = (score) => {
    if (score >= 8) return "bg-red-100 text-red-600";
    if (score >= 4) return "bg-yellow-100 text-yellow-600";
    return "bg-green-100 text-green-600";
  };

  const getRecommendation = (score) => {
    if (score >= 8) {
      return {
        message:
          "High impact detected. Immediate review recommended. Consider strategic response.",
        style: "bg-red-50 border-red-400 text-red-700",
      };
    }
    if (score >= 4) {
      return {
        message:
          "Moderate impact detected. Review changes and assess implications.",
        style: "bg-yellow-50 border-yellow-400 text-yellow-700",
      };
    }
    return {
      message:
        "Low impact changes. Monitoring is sufficient.",
      style: "bg-green-50 border-green-400 text-green-700",
    };
  };

  const latestImpact =
    history.length > 0 ? history[0].impactScore || 0 : 0;
  const recommendation = getRecommendation(latestImpact);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Back Button */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="mr-4 px-4 py-2 bg-accent text-background hover:bg-muted rounded-lg transition"
          
        >
          ← Back
        </button>
        <h2 className="text-3xl font-bold">Change History</h2>
      </div>

      {loading && <p className="text-gray-500">Loading history...</p>}

      {!loading && history.length === 0 && (
        <p className="text-gray-500">No history available yet.</p>
      )}

      {!loading &&
        history.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-xl p-6 mb-6"
          >
            <p className="text-gray-500 text-sm">
              {new Date(item.createdAt).toLocaleString()}
            </p>

            <div className="mt-4">
              <p className="font-semibold mb-2">AI Summary:</p>

              {item.summary === "Initial page capture." ? (
                <p className="text-gray-600">{item.summary}</p>
              ) : (
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {item.summary
                    .split("\n")
                    .filter((line) => line.trim() !== "")
                    .map((line, index) => (
                      <li key={index}>
                        {line.replace(/[*#-]/g, "").trim()}
                      </li>
                    ))}
                </ul>
              )}
            </div>

            <div className="mt-4">
              <span className="font-semibold">Impact Score:</span>
              <span
                className={`ml-3 px-3 py-1 rounded-full text-sm font-semibold ${getImpactBadge(
                  item.impactScore || 0
                )}`}
              >
                {item.impactScore || 0}
              </span>
            </div>
          </div>
        ))}

      {/* Recommendation */}
      {!loading && history.length > 0 && (
        <div
          className={`mt-8 border-l-4 p-5 rounded-lg ${recommendation.style}`}
        >
          <h3 className="font-bold mb-2">Recommended Action</h3>
          <p>{recommendation.message}</p>
        </div>
      )}
    </div>
  );
}