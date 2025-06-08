export default function CompanyHistory() {
  const timeline = [
    {
      year: "2008",
      title: "Our Beginning",
      description: "Started as a small family restaurant with just 20 seats"
    },
    {
      year: "2012",
      title: "First Expansion",
      description: "Expanded to a larger location and introduced our signature dishes"
    },
    {
      year: "2015",
      title: "Award Recognition",
      description: "Received our first Michelin star for culinary excellence"
    },
    {
      year: "2018",
      title: "Sustainability Initiative",
      description: "Launched our farm-to-table program and sustainable practices"
    },
    {
      year: "2023",
      title: "Present Day",
      description: "Continuing to serve excellence with multiple locations and growing team"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Journey</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
        
        {/* Timeline items */}
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 px-8">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 