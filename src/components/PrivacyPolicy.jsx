import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Lock,
  Eye,
  Activity,
  CreditCard,
  Cookie,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(1);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: <Eye className="text-blue-400" size={20} />,
      content: (
        <div className="space-y-2 pl-6">
          <p>
            <span className="font-semibold text-blue-400">Personal Data:</span>{" "}
            Name, email, phone number, billing details, etc.
          </p>
          <p>
            <span className="font-semibold text-blue-400">
              Payment Information:
            </span>{" "}
            Collected through a secure third-party payment gateway.
          </p>
          <p>
            <span className="font-semibold text-blue-400">Usage Data:</span> IP
            address, browser type, pages visited, and interaction with the
            website.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: <Activity className="text-green-400" size={20} />,
      content: (
        <ul className="list-disc pl-10 space-y-1">
          <li>To provide and manage our services.</li>
          <li>To process transactions securely.</li>
          <li>To improve our website and services.</li>
          <li>To send updates and promotional materials (with consent).</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "Data Protection",
      icon: <Lock className="text-pink-400" size={20} />,
      content: (
        <ul className="list-disc pl-10 space-y-1">
          <li>We use SSL encryption for secure transactions.</li>
          <li>
            We do not sell or share your data with third parties, except for
            necessary service providers.
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      title: "Cookies and Tracking",
      icon: <Cookie className="text-orange-400" size={20} />,
      content: (
        <p className="pl-6">
          We use cookies to enhance user experience and analyze website traffic.
        </p>
      ),
    },
    {
      id: 5,
      title: "Third-Party Services",
      icon: <CreditCard className="text-gray-600" size={20} />,
      content: (
        <p className="pl-6">
          We use third-party payment gateways for transactions. We do not store
          your payment details.
        </p>
      ),
    },
    {
      id: 6,
      title: "Contact Us",
      icon: <Mail className="text-blue-400" size={20} />,
      content: (
        <p className="pl-6">
          If you have questions about this Privacy Policy, contact us at{" "}
          <a
            href="mailto:contact@techamica.com"
            className="text-blue-400 underline hover:text-blue-500"
          >
            contact@techamica.com
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-16">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-600 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          At <span className="font-medium">TechAmica.com</span>, we respect your
          privacy and are committed to protecting it through this Privacy
          Policy. This policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <div
              className={`flex items-center justify-between p-4 cursor-pointer ${
                expandedSection === section.id ? "bg-gray-50" : "bg-white"
              }`}
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex items-center space-x-3">
                {section.icon}
                <h2 className="font-medium">{section.title}</h2>
              </div>
              {expandedSection === section.id ? (
                <ChevronUp size={18} className="text-gray-600" />
              ) : (
                <ChevronDown size={18} className="text-gray-600" />
              )}
            </div>

            {expandedSection === section.id && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200">
          Accept Privacy Policy
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
