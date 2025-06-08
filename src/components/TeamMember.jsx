import { useState } from 'react';

export default function TeamMember({ member }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300"
             style={{ opacity: isHovered ? 1 : 0 }}>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm">{member.bio}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-blue-600 font-medium">{member.position}</p>
      </div>
    </div>
  );
} 