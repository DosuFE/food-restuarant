import { useState } from "react";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus({ type: "error", message: "Please enter your email address" });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }
    // Here you would typically make an API call to your backend
    setStatus({ type: "success", message: "Thank you for subscribing!" });
    setShowAlert(true);
    setEmail("");
    
    // Hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="relative">
      {showAlert && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-down z-50">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p>Successfully subscribed!</p>
          </div>
        </div>
      )}
      <form 
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl my-5 flex flex-col sm:flex-row items-center justify-center gap-4 px-5 py-2 hover:shadow transition-shadow duration-300"
      >
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address..."
          className="px-8 w-full py-4 outline-none cursor-pointer text-black/50 focus:ring-2 focus:ring-gray-400 focus:border-transparent rounded-xl"
          required
        />
        <button
          type="submit"
          className="bg-black/90 text-white/70 px-10 py-3 rounded-xl cursor-pointer
          hover:bg-black/80 hover:text-white transition-all duration-300 hover:shadow"
        >
          Subscribe
        </button>
      </form>
      {status.message && !showAlert && (
        <p className={`text-sm text-center ${
          status.type === "error" ? "text-red-600" : "text-green-600"
        }`}>
          {status.message}
        </p>
      )}
    </div>
  );
}
