import { useState, useEffect } from 'react';

export default function StatsCounter({ stat }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${stat.id}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [stat.id]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.number / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.floor(increment * currentStep), stat.number));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, stat.number]);

  return (
    <div 
      id={`stat-${stat.id}`}
      className="text-center p-6 bg-white rounded-xl shadow-md transform transition-all duration-300 hover:scale-105"
    >
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-600 font-medium">
        {stat.label}
      </div>
    </div>
  );
} 