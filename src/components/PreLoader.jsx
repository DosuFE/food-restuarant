import { useEffect, useState } from 'react';

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Show loader for 1 minutes

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 z-50 flex items-center justify-center animate-pulse">
      {/* Glowing background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-orange-200 rounded-full opacity-20 animate-[ping_3s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-red-200 rounded-full opacity-20 animate-[ping_3s_ease-in-out_infinite_1.5s]"></div>
      </div>

      <div className="relative w-48 h-48">
        {/* Plate */}
        <div className="absolute inset-0 rounded-full border-8 border-gray-300 bg-white shadow-lg animate-[spin_3s_linear_infinite]">
          {/* Food items container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
            {/* Borscht (beet soup) - deep red with white swirl */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-red-700 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 rounded-full transform rotate-45"></div>
              <div className="absolute inset-0 bg-white/10 rounded-full transform -rotate-45"></div>
            </div>
            
            {/* Pelmeni (dumplings) - arranged in a circle */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1 w-20">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 transform rotate-45"
                />
              ))}
            </div>

            {/* Sour cream dollop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-white rounded-full shadow-inner">
                <div className="w-4 h-4 bg-white/80 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>

            {/* Dill garnish */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-8 h-1 bg-green-600 rounded-full transform rotate-45"></div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-8 h-1 bg-green-600 rounded-full transform -rotate-45"></div>
          </div>
        </div>
        {/* Loading text with glow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
          <span className="text-gray-600 font-medium text-lg animate-pulse">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader; 