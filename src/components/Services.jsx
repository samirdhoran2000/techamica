import React from "react";
import {
  Code2,
  Palette,
  ShoppingCart,
  Search,
  AppWindow,
  WrenchIcon,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Custom Web Development",
      description:
        "We build dynamic, high-performance websites tailored to your business needs. Using modern technologies like React, Node.js, and Tailwind CSS, we create scalable and responsive digital experiences.",
      icon: Code2,
      bgColor: "#E6F2FF", // Soft, light blue
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "User experience matters. Our design experts craft intuitive and visually appealing interfaces that enhance engagement and conversions.",
      icon: Palette,
      bgColor: "#F0E6FF", // Soft, light purple
      iconColor: "text-purple-600",
    },
    {
      id: 3,
      title: "E-commerce Development",
      description:
        "Grow your business with secure, feature-rich, and easy-to-manage e-commerce solutions. From Shopify to custom-built platforms, we deliver seamless shopping experiences.",
      icon: ShoppingCart,
      bgColor: "#E6FFF0", // Soft, light green
      iconColor: "text-green-600",
    },
    {
      id: 4,
      title: "SEO & Performance Optimization",
      description:
        "Speed, security, and search engine rankings are crucial for success. We optimize websites to load faster, rank higher, and perform better across all devices.",
      icon: Search,
      bgColor: "#FFFAE6", // Soft, light yellow
      iconColor: "text-yellow-600",
    },
    {
      id: 5,
      title: "Web App Development",
      description:
        "From SaaS platforms to business tools, we create robust web applications that streamline operations and enhance productivity.",
      icon: AppWindow,
      bgColor: "#FFE6F2", // Soft, light pink
      iconColor: "text-pink-600",
    },
    {
      id: 6,
      title: "Website Maintenance & Support",
      description:
        "Your website needs continuous updates and security checks. We provide ongoing maintenance to keep your digital presence running smoothly.",
      icon: WrenchIcon,
      bgColor: "#E6FFFC", // Soft, light teal
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Transforming Ideas into Powerful Digital Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We design, develop, and optimize websites and web applications that
            drive business success. Our solutions are crafted for performance,
            scalability, and seamless user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 p-6`}
              style={{
                backgroundColor: service.bgColor,
              }}
            >
              <div className={`${service.iconColor} mb-4`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get a Free Quote
            </button>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Start Your Project
            </button>
          </div>
          <div className="flex gap-4">
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              View Portfolio
            </button>
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              Explore Services
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
