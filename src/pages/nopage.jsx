import '../pages/nopage.css'
export default function NoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="relative p-8 rounded-2xl bg-white/30 backdrop-blur-sm shadow-xl">
        {/* Dog SVG */}
        <svg
          className="w-48 h-48 animate-bark"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dog body */}
          <circle cx="50" cy="50" r="40" fill="#8B4513" />
          {/* Dog ears */}
          <path
            d="M30 30 Q20 20 30 10 Q40 20 30 30"
            fill="#8B4513"
            className="animate-ear-left"
          />
          <path
            d="M70 30 Q80 20 70 10 Q60 20 70 30"
            fill="#8B4513"
            className="animate-ear-right"
          />
          {/* Dog eyes */}
          <circle cx="40" cy="45" r="3" fill="white" />
          <circle cx="60" cy="45" r="3" fill="white" />
          {/* Dog nose */}
          <circle cx="50" cy="55" r="5" fill="black" />
          {/* Dog mouth */}
          <path
            d="M45 60 Q50 65 55 60"
            stroke="black"
            strokeWidth="2"
            fill="none"
            className="animate-mouth"
          />
        </svg>
        {/* Barking sound waves */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="animate-sound-wave-1"></div>
          <div className="animate-sound-wave-2"></div>
          <div className="animate-sound-wave-3"></div>
        </div>
      </div>
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-pulse">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-700 font-medium">
          The page you are looking for does not exist.
        </p>
        <p className="text-sm text-gray-500">
          Woof! Let's get you back on track.
        </p>
      </div>
    </div>
  );
}
