import { useState } from "react";

const Contact= () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log("Form Submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
        
        {submitted && (
          <p className="text-green-400 text-center mb-4">Message sent successfully!</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              className="w-full p-2 border rounded bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
              rows="4"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-white text-black font-bold rounded-lg transition-all duration-300 hover:bg-gray-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
