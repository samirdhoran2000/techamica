import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Code,
  DollarSign,
  Copyright,
  Shield,
  AlertTriangle,
  FileText,
} from "lucide-react";

const TermsAndConditions = () => {
  const [expandedSection, setExpandedSection] = useState(1);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 1,
      title: "Services Provided",
      icon: <Code className="text-blue-400" size={20} />,
      content: (
        <ul className="list-disc pl-10 space-y-1">
          <li>
            TechAmica provides web development, software development, and
            Android development services.
          </li>
          <li>
            Payment for services must be made in advance unless agreed
            otherwise.
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Payment Terms",
      icon: <DollarSign className="text-green-400" size={20} />,
      content: (
        <ul className="list-disc pl-10 space-y-1">
          <li>
            We accept payments through secure third-party payment gateways.
          </li>
          <li>Users must provide accurate billing details.</li>
          <li>
            Any fraudulent transaction will be reported and legal action may be
            taken.
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "Intellectual Property",
      icon: <Copyright className="text-pink-400" size={20} />,
      content: (
        <p className="pl-6">
          All content, logos, and materials on this website are owned by
          TechAmica and cannot be copied or used without permission.
        </p>
      ),
    },
    {
      id: 4,
      title: "User Obligations",
      icon: <Shield className="text-orange-400" size={20} />,
      content: (
        <p className="pl-6">
          Users must not engage in any unlawful or harmful activities on our
          website.
        </p>
      ),
    },
    {
      id: 5,
      title: "Limitation of Liability",
      icon: <AlertTriangle className="text-gray-600" size={20} />,
      content: (
        <p className="pl-6">
          TechAmica is not responsible for any direct or indirect damages
          resulting from the use of our website or services.
        </p>
      ),
    },
    {
      id: 6,
      title: "Modifications",
      icon: <FileText className="text-blue-400" size={20} />,
      content: (
        <p className="pl-6">
          We reserve the right to update these Terms & Conditions at any time.
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-16">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-600 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600">
          Welcome to <span className="font-medium">TechAmica.com</span>! By
          accessing or using our website, you agree to comply with the following
          Terms & Conditions.
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
          Accept Terms & Conditions
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
