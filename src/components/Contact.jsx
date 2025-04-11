import { useState } from "react";
import { Stars } from "sparkels_ui";

const Contact = () => {
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
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden">
      <div><Stars /></div>
       <div className="w-[100vw]">hi</div>
      <div className="flex flex-row justify-center items-center text-white absolute sm:w-full flex-col mb-84 w-[300px]">
        <div className="text-2xl sm:text-3xl font-semibold tracking-wide mb-4">ascaius</div>

        <div className="flex justify-center items-center text-white absolute w-full flex-col mb-84">
          <div className="w-full max-w-md bg-gray-900/90 backdrop-blur border border-gray-700 p-6 rounded-2xl shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>

            {submitted && (
              <p className="text-green-400 text-center mb-4 transition-opacity duration-300">
                Message sent successfully!
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm text-gray-300">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-300">Message</label>
                <textarea
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="4"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full p-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
