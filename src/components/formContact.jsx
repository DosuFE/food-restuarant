import { useState } from 'react';

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    enquiry: 'enquiry',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      enquiry: 'enquiry',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* NAME */}
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label className="text-lg font-medium text-gray-700" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="bg-gray-50 w-full p-3 rounded-xl border-2 
            border-gray-200 outline-none
            hover:border-blue-400 
            hover:shadow-md hover:shadow-blue-100
            focus:border-blue-500 focus:ring-2 focus:ring-blue-200
            transition-all duration-200" 
            required
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label className="text-lg font-medium text-gray-700" htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="bg-gray-50 w-full p-3 rounded-xl border-2 
            border-gray-200 outline-none
            hover:border-blue-400 hover:shadow-md hover:shadow-blue-100
            focus:border-blue-500 focus:ring-2 focus:ring-blue-200
            transition-all duration-200"
            required
          />
        </div>

        {/* SUBJECT */}
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label className="text-lg font-medium text-gray-700" htmlFor="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter your subject"
            className="bg-gray-50 w-full p-3 rounded-xl border-2 
            border-gray-200 outline-none
            hover:border-blue-400 hover:shadow-md hover:shadow-blue-100
            focus:border-blue-500 focus:ring-2 focus:ring-blue-200
            transition-all duration-200"
            required
          />
        </div>

        {/* ENQUIRY TYPE */}
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label className="text-lg font-medium text-gray-700" htmlFor="enquiry">Enquiry Type</label>
          <select 
            name="selectEnquiry" 
            id="selectEnquiry" 
            value={formData.selectEnquiry}
            onChange={handleChange}
            className="bg-gray-50 w-full p-3 rounded-xl border-2 
            border-gray-200 outline-none
            hover:border-blue-400 hover:shadow-md hover:shadow-blue-100
            focus:border-blue-500 focus:ring-2 focus:ring-blue-200
            transition-all duration-200"
            required
          >
            <option value="selectEnquiry">Select Enquiry Type</option>
            <option value="advertising">Advertising</option>
            <option value="enquiry">Enquiry</option>
            <option value="feedback">Feedback</option>
            <option value="complaint">Complaint</option> 
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* MESSAGE */}
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <label className="text-lg font-medium text-gray-700" htmlFor="message">Message</label>
        <textarea 
          name="message" 
          id="message" 
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="bg-gray-50 w-full p-3 rounded-xl border-2 
          border-gray-200 outline-none
          hover:border-blue-400 hover:shadow-md hover:shadow-blue-100
          focus:border-blue-500 focus:ring-2 focus:ring-blue-200
          transition-all duration-200
          min-h-[200px] resize-y"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button 
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl
          hover:bg-blue-700 transform hover:scale-105
          transition-all duration-200 font-medium text-lg
          focus:outline-none focus:ring-2 focus:ring-blue-200
          shadow-lg shadow-blue-200"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
