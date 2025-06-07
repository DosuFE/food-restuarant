import Navbar from "../components/navbar";
import Subscription from "../components/subscribeSection";
import Footer from "../components/footer";
import DeliciousRecipe from "../components/DeliciousRecipes";
import FormContact from "../components/formContact";
import chef from "../assets/portrait-happy-male-chef-dressed-uniform.jpg";
import { useState } from "react";

export default function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const handleContactClick = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setShowToast(true);

      // Auto-hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      {/* NAV BAR LINK */}
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We'd love to hear from you. Get in touch with our team for any
              inquiries or feedback.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            {/* Kitchen Image Section */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 rounded-3xl"></div>
                <img
                  src={chef}
                  alt="Chef In Kitchen"
                  className="w-full h-[500px] object-cover rounded-3xl transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                  <h3 className="text-2xl font-bold mb-2">Our Kitchen</h3>
                  <p className="text-gray-200">Where culinary magic happens</p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 transform transition-all duration-500 hover:shadow-2xl">
                <FormContact />
              </div>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            {/* Location Card */}
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 text-3xl mb-4 animate-bounce">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600">123 Restaurant Street, Food City</p>
            </div>

            {/* Phone Card */}
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 text-3xl mb-4 animate-pulse">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
              <button
                onClick={() => handleContactClick("+2349126116913")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2 group mx-auto"
              >
                <span>(+234 9126116913)</span>
                <i className="fas fa-phone-alt text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </button>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 text-3xl mb-4 animate-pulse">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <button
                onClick={() => handleContactClick("sulaimondosu988@gmail.com")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2 group mx-auto"
              >
                <span>sulaimondosu988@gmail.com</span>
                <i className="fas fa-paper-plane text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </button>
            </div>
          </div>

          {/* Enhanced Toast Notification */}
          {showToast && (
            <div className="fixed bottom-8 right-8 z-50 toast-animation">
              <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 flex items-center gap-3 min-w-[300px]">
                <div className="bg-green-100 p-2 rounded-full">
                  <i className="fas fa-check-circle text-green-500 text-xl"></i>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">
                    Copied to clipboard!
                  </p>
                  <p className="text-gray-500 text-sm truncate">{copiedText}</p>
                </div>
                <button
                  onClick={() => setShowToast(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SUBSCRIPTION SECTION */}
      <section className="px-2 my-12 md:px-5 lg:px-12 lg:my-16">
        <main className="newsletter_container w-full py-10 shadow-2xl md:rounded-4xl">
          <div className="relative z-10">
            <Subscription />
          </div>
        </main>
      </section>

      {/* DELICIOUS RECIPES SECTION */}
      <section className="px-2 my-12 md:px-5 lg:px-12 lg:my-16">
        <main className="delicious_recipes_container w-full py-10 shadow-2xl md:rounded-4xl">
          <div className="relative z-10">
            <DeliciousRecipe />
          </div>
        </main>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
