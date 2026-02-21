import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-primary text-background rounded-3xl shadow-2xl p-12 max-w-3xl text-center">

        <h1 className="text-4xl font-bold mb-6">
          Competitive Intelligence Tracker
        </h1>

        <p className="text-muted mb-8 text-lg">
          Monitor competitor websites, detect changes automatically,
          and receive AI-powered business insights in real time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
          <div className="bg-accent rounded-xl p-5">
            <h3 className="font-semibold text-highlight mb-2">
              Track Changes
            </h3>
            <p className="text-sm">
              Automatically monitor pricing, features and updates.
            </p>
          </div>

          <div className="bg-accent rounded-xl p-5">
            <h3 className="font-semibold text-highlight mb-2">
              AI Summary
            </h3>
            <p className="text-sm">
              Get structured business insights instantly.
            </p>
          </div>

          <div className="bg-accent rounded-xl p-5">
            <h3 className="font-semibold text-highlight mb-2">
              Impact Score
            </h3>
            <p className="text-sm">
              Quantify how significant competitor updates are.
            </p>
          </div>

          <div className="bg-accent rounded-xl p-5">
            <h3 className="font-semibold text-highlight mb-2">
              Smart Actions
            </h3>
            <p className="text-sm">
              Get recommended responses based on impact.
            </p>
          </div>
        </div>

        <Link
          to="/dashboard"
          className="bg-highlight text-primary px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Get Started
        </Link>

      </div>
    </div>
  );
}