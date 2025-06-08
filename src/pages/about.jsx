import { useState } from 'react';
import TeamMember from '../components/TeamMember';
import MissionStatement from '../components/MissionStatement';
import CompanyHistory from '../components/CompanyHistory';
import StatsCounter from '../components/StatsCounter';
import Navbar from "../components/navbar";
import Subscription from "../components/subscribeSection";
import Footer from "../components/footer";

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "Executive Chef",
      image: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
      bio: "With over 15 years of culinary experience, John brings innovation to every dish."
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Restaurant Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnQlMjBtYW5hZ2VyfGVufDB8fDB8fHww",
      bio: "Jane ensures every guest receives exceptional service and a memorable dining experience."
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Sous Chef",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZWZ8ZW58MHx8MHx8fDA%3D",
      bio: "Mike specializes in fusion cuisine and brings creativity to our menu."
    }
  ];

  const stats = [
    { id: 1, number: 15, label: "Years of Excellence", suffix: "+" },
    { id: 2, number: 50, label: "Team Members", suffix: "+" },
    { id: 3, number: 1000, label: "Happy Customers", suffix: "+" },
    { id: 4, number: 25, label: "Awards Won", suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] bgContainer">
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-white/90">Discover our story and meet our team</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('mission')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'mission' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'history' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Our History
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'team' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Our Team
          </button>
        </div>

        {/* Content Sections */}
        <div className="mt-8">
          {activeTab === 'mission' && <MissionStatement />}
          {activeTab === 'history' && <CompanyHistory />}
          {activeTab === 'team' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map(member => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(stat => (
              <StatsCounter key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </div>

      {/* SUBCRIPTION SECTION */}
      <section className="px-2 my-12 md:px-5 lg:px-12 lg:my-16">
        <main className="newsletter_container w-full py-10 shadow-2xl md:rounded-4xl">
          <div className="relative z-10">
            <Subscription />
          </div>
        </main>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
