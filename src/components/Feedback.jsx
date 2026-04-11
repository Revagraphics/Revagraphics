// src/components/ContactSection.tsx
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    skype: '',
    subject: '',
    interestedIn: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const phoneNum = "918368769364";

  const message = Object.entries(formData)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');

  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNum}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};


  return (
    <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        
        {/* ==================== LEFT SIDE - About + Team ==================== */}
        <div className="space-y-12">
          
          {/* About Company */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              About Reva
            </h2>
            <div className="prose text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                We are a creative design and technology studio passionate about building 
                unique brands and exceptional digital experiences. With expertise in branding, 
                web development, and marketing, we help businesses stand out and connect with their customers.
              </p>
            </div>
          </div>

          {/* Technical Team Contact */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
              Talk to Our Technical Team
            </h2>

            <div className="space-y-8">
              {/* Sales Department */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 mx-auto sm:mx-0">
                  📞
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-medium text-gray-900 text-lg">Sales Department</p>
                  <a 
                    href="tel:+919958503650" 
                    className="text-xl md:text-2xl font-semibold text-gray-800 hover:text-orange-600 transition"
                  >
                    +91 995 850 3650
                  </a>
                  <p className="text-gray-500 mt-1">For project inquiries &amp; business</p>
                </div>
              </div>

              {/* Technical Department */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 mx-auto sm:mx-0">
                  📞
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-medium text-gray-900 text-lg">Technical Department</p>
                  <a 
                    href="tel:+919310711788" 
                    className="text-xl md:text-2xl font-semibold text-gray-800 hover:text-orange-600 transition"
                  >
                    +91 9310 711 788
                  </a>
                  <p className="text-gray-500 mt-1">For technical support &amp; development</p>
                </div>
              </div>

              {/* Emails */}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-gray-500">Sales Email</p>
                  <a 
                    href="mailto:nverma@revagraphics.com" 
                    className="text-gray-700 hover:text-orange-600 break-all"
                  >
                    nverma@revagraphics.com
                  </a>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-gray-500">Technical Email</p>
                  <a 
                    href="mailto:revagraphicss@gmail.com" 
                    className="text-gray-700 hover:text-orange-600 break-all"
                  >
                    revagraphicss@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== RIGHT SIDE - Form ==================== */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 text-center lg:text-left">
            Send Your Inquiry
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 text-base placeholder-gray-400"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 text-base placeholder-gray-400"
                  placeholder="Email Address"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 text-base placeholder-gray-400"
                  placeholder="Contact Number"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="skype"
                  value={formData.skype}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 text-base placeholder-gray-400"
                  placeholder="Skype"
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 text-base placeholder-gray-400"
                  placeholder="Subject"
                />
              </div>
              <div>
                <select
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 text-base text-gray-700"
                >
                  <option value="">Interested in</option>
                  <option value="branding">Branding</option>
                  <option value="web-development">Web Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:border-orange-500 text-base placeholder-gray-400 resize-y"
                placeholder="Tell us more about your project..."
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className="mt-1.5 w-5 h-5 accent-orange-500 cursor-pointer"
              />
              <label className="text-sm text-gray-600 leading-relaxed">
                I agree to the{" "}
                <a href="#" className="text-orange-600 hover:underline">
                  Terms & Conditions
                </a>{" "}
                of Reva.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-all text-white font-semibold text-lg py-4 rounded-2xl mt-2"
            >
              Send your inquiry →
            </button>

            {/* Privacy Note */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">
              <span>🔒</span>
              We hate spam, and we respect your privacy.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;