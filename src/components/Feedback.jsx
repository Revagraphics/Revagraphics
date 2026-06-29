import { useState } from 'react';
import ShimmerText from "../components/ShimmerText";
import logo1 from "../assets/customer-logo-1.png";
import logo2 from "../assets/customer-logo-2.png";
import logo3 from "../assets/customer-logo-11.png";
import toast from "react-hot-toast";

export default function Feedback()  {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    interestedIn: '',
    message: '',
    agree: false,
  });



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const phoneNum = "918368769364";
  //   const message = Object.entries(formData)
  //     .map(([key, value]) => `${key}: ${value}`)
  //     .join('\n');
  //   const encodedMessage = encodeURIComponent(message);
  //   const whatsappUrl = `https://wa.me/${phoneNum}?text=${encodedMessage}`;
  //   window.open(whatsappUrl, "_blank");
  // };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const toastId = toast.loading("Sending inquiry...");

    try{

      const response = await fetch(
        "https://formsubmit.co/ajax/sourabhnegi557@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: formData.fullName,
            Phone: formData.contactNumber,
            Email: formData.email,
            Department: formData.interestedIn,
            Message: formData.message,
            Source: "Reva Graphics ",
          }),
        },
      );

      const result = await response.json();
      toast.dismiss(toastId);

      if (response.ok) {
        toast.success("Inquiry submitted successfully!");
        setFormSubmitted(true);

        setFormData({
          fullName: "",
          contactNumber: "",
          email: "",
          department: "",
          message: "",
        });

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        console.error(result);
        toast.error("Unable to send inquiry. Please try again.");
      }

    }catch(err){
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <section className="w-full min-h-screen  bg-gradient-to-r from-[#FF9800] to-[#E91E63] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-zinc-100 uppercase mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Let's Build Something {" "}
            <span className='bg-zinc-100 rounded-2xl'><ShimmerText>Great</ShimmerText></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">


          {/* ===== LEFT SIDE ===== */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                Talk to Our Team
              </h2>

              <div className="space-y-6">

                {/* Sales */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    📞
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Sales Department</p>
                    <a
                      href="tel:+919958503650"
                      className="text-base sm:text-lg font-semibold text-gray-800 hover:text-orange-600 transition-colors block truncate"
                    >
                      +91 995 850 3650
                    </a>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Project inquiries &amp; business</p>
                  </div>
                </div>

                {/* Technical */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    🛠️
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Technical Department</p>
                    <a
                      href="tel:+919310711788"
                      className="text-base sm:text-lg font-semibold text-gray-800 hover:text-orange-600 transition-colors block truncate"
                    >
                      +91 9310 711 788
                    </a>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Technical support &amp; development</p>
                  </div>
                </div>

                {/* Emails */}
                <div className="pt-5 border-t border-gray-100 space-y-3">
                  {/* <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Sales Email</p>
                    <a
                      href="mailto:nverma@revagraphics.com"
                      className="text-sm sm:text-base text-gray-700 hover:text-orange-600 transition-colors break-all"
                    >
                      nverma@revagraphics.com
                    </a>
                  </div> */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Technical Email</p>
                    <a
                      href="mailto:revagraphicss@gmail.com"
                      className="text-sm sm:text-base text-gray-700 hover:text-orange-600 transition-colors break-all"
                    >
                      revagraphicss@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex rounded-2xl gap-3 p-6 sm:p-8 shadow-sm ">
              
              <div className='bg-white rounded-2xl p-3 border-gray-100'>
                    <img src={logo1} alt="" />
              </div>
 
              <div className='bg-white rounded-2xl p-3 border-gray-100'>
                    <img src={logo2} alt="" />
              </div>
 
              <div className='bg-white rounded-2xl p-3 border-gray-100'>
                    <img src={logo3} alt="" />   
              </div>

            </div>


          </div>



          {/* ===== RIGHT SIDE - Form ===== */}
          <div className="lg:col-span-3 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Send Your Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 text-sm sm:text-base placeholder-gray-400 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 text-sm sm:text-base placeholder-gray-400 transition"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 text-sm sm:text-base placeholder-gray-400 transition"
                />
                <div className="relative">
                  <select
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 text-sm sm:text-base text-gray-500 transition appearance-none cursor-pointer pr-10"
                  >
                    <option value="">Interested in</option>
                    <option value="branding">Brand Identity</option>
                    <option value="web-desiging">Website Desiging</option>
                    <option value="web-development">Website Development</option>
                    <option value="marketing">Degital Marketing</option>
                    <option value="marketing">Application Development</option>
                    <option value="customize software">Customise Software</option>
                    <option value="other">Other</option>
                  </select>
                  <svg
                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>


              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us more about your project..."
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 text-sm sm:text-base placeholder-gray-400 resize-y transition"
              />

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 sm:w-5 sm:h-5 accent-orange-500 cursor-pointer flex-shrink-0"
                />
                <label htmlFor="agree" className="text-xs sm:text-sm text-gray-500 leading-relaxed cursor-pointer">
                  I agree to the{" "}
                  <a href="#" className="text-orange-500 hover:underline font-medium">
                    Terms &amp; Conditions
                  </a>{" "}
                  of Reva.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] transition-all text-white font-semibold text-sm sm:text-base lg:text-lg py-3.5 sm:py-4 rounded-xl sm:rounded-2xl mt-1 shadow-sm shadow-orange-200"
              >
                Send your inquiry →
              </button>

              {/* Privacy */}
              <p className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-gray-400 pt-1">
                <span>🔒</span> We hate spam, and we respect your privacy.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

