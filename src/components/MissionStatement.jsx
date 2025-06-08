export default function MissionStatement() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
      <div className="space-y-6 text-lg text-gray-600">
        <p>
          At our restaurant, we are dedicated to creating unforgettable dining experiences through exceptional food, 
          warm hospitality, and a commitment to sustainability.
        </p>
        <p>
          We believe in sourcing the finest local ingredients, supporting our community, and maintaining the highest 
          standards of culinary excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-3">Quality</h3>
            <p className="text-gray-600">Using only the finest ingredients to create exceptional dishes</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-3">Sustainability</h3>
            <p className="text-gray-600">Committed to eco-friendly practices and local sourcing</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-3">Innovation</h3>
            <p className="text-gray-600">Constantly evolving our menu with creative culinary concepts</p>
          </div>
        </div>
      </div>
    </div>
  );
} 