import React, { useState, useRef } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  // Create a ref for the form to use with EmailJS
  const formRef = useRef(null);

  // Use controlled state for form data and errors.
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate required fields
  const validate = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = "Name is required";
    if (!formData.from_email.trim()) newErrors.from_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.from_email))
      newErrors.from_email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Update state on input change and clear error for that field.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Handle form submission: validate and then send email via EmailJS.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .sendForm(
          "service_1087ghr",
          "template_6x4c94m",
          formRef.current,
          "8UvH_tkmz6q5jBsOi"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setSubmitted(true);
            // Reset the form data after successful submission
            setFormData({
              from_name: "",
              from_email: "",
              phone: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-16">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-600 mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Have questions or feedback? We&apos;d love to hear from you. Fill out
          the form below and our team will get back to you shortly.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Contact Information */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="font-semibold text-gray-600 mb-4 flex items-center">
              <MapPin className="text-pink-400 mr-2" size={20} />
              Our Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-blue-400 mt-1 mr-3" size={18} />
                <div>
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <a
                    href="mailto:contact@techamica.com"
                    className="text-blue-400 hover:underline"
                  >
                    contact@techamica.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-green-400 mt-1 mr-3" size={18} />
                <div>
                  <p className="text-sm text-gray-600 font-medium">Phone</p>
                  <a href="tel:+15551234567" className="text-gray-600">
                    +91 902 232 8048
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-orange-400 mt-1 mr-3" size={18} />
                <div>
                  <p className="text-sm text-gray-600 font-medium">Address</p>
                  <p className="text-gray-600">
                    Malkapur, Maharashtra
                    <br />
                    India, MH 443101
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="font-semibold text-gray-600 mb-3">Business Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday:</span>
                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday:</span>
                <span className="text-gray-600">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="text-gray-600">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <h3 className="text-green-600 font-medium text-lg mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600">
                Thank you for contacting us. We&apos;ll respond to your inquiry
                as soon as possible.
              </p>
              <button
                className="mt-4 px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition-colors"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="flex items-center text-gray-600 mb-1">
                  <User className="text-blue-400 mr-2" size={16} />
                  Your Name <span className="text-pink-400 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.from_name ? "border-pink-400" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  placeholder="John Doe"
                />
                {errors.from_name && (
                  <p className="mt-1 text-pink-400 text-sm flex items-center">
                    <AlertCircle size={14} className="mr-1" />{" "}
                    {errors.from_name}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center text-gray-600 mb-1">
                  <Mail className="text-blue-400 mr-2" size={16} />
                  Email Address <span className="text-pink-400 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.from_email ? "border-pink-400" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  placeholder="your@email.com"
                />
                {errors.from_email && (
                  <p className="mt-1 text-pink-400 text-sm flex items-center">
                    <AlertCircle size={14} className="mr-1" />{" "}
                    {errors.from_email}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center text-gray-600 mb-1">
                  <Phone className="text-green-400 mr-2" size={16} />
                  Phone Number{" "}
                  <span className="text-gray-400 ml-1 text-sm">(Optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="flex items-center text-gray-600 mb-1">
                  <Mail className="text-orange-400 mr-2" size={16} />
                  Subject{" "}
                  <span className="text-gray-400 ml-1 text-sm">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="flex items-center text-gray-600 mb-1">
                  <MessageSquare className="text-pink-400 mr-2" size={16} />
                  Your Message <span className="text-pink-400 ml-1">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.message ? "border-pink-400" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  placeholder="Please write your message here..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-pink-400 text-sm flex items-center">
                    <AlertCircle size={14} className="mr-1" /> {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-pink-400 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
