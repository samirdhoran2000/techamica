import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  RefreshCw,
  XCircle,
  Mail,
  Clock,
} from "lucide-react";

const RefundPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(1);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 1,
      title: "Eligibility for Refunds",
      icon: <RefreshCw className="text-green-400" size={20} />,
      content: (
        <ul className="list-disc pl-10 space-y-1">
          <li>
            Refunds are only applicable if a service has not been initiated.
          </li>
          <li>
            If a project has started, only a partial refund may be considered,
            based on work completed.
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Non-Refundable Cases",
      icon: <XCircle className="text-pink-400" size={20} />,
      content: (
        <ul className="list-disc pl-10 space-y-1">
          <li>Once a project is delivered, no refunds will be issued.</li>
          <li>Subscription or maintenance fees are non-refundable.</li>
          <li>
            Payments made through third-party payment gateways may be subject to
            their refund policies.
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "How to Request a Refund",
      icon: <Mail className="text-blue-400" size={20} />,
      content: (
        <ul className="list-disc pl-10 space-y-1">
          <li>
            Submit a refund request to{" "}
            <a
              href="mailto:contact@techamica.com"
              className="text-blue-400 underline hover:text-blue-500"
            >
              contact@techamica.com
            </a>{" "}
            with your payment details and reason for the request.
          </li>
          <li>
            Refunds, if approved, will be processed within 7-10 business days.
          </li>
          <li>
            For further queries, feel free to contact us at{" "}
            <a
              href="mailto:contact@techamica.com"
              className="text-blue-400 underline hover:text-blue-500"
            >
              contact@techamica.com
            </a>
            .
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-16">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-600 mb-4">Refund Policy</h1>
        <p className="text-gray-600">
          At <span className="font-medium">TechAmica</span>, we strive to
          provide the best services. However, we have the following refund
          policies:
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

      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Clock size={18} className="text-orange-400" />
          <p className="font-medium">Processing Time</p>
        </div>
        <p className="text-gray-600 pl-6">
          Please note that all refund requests are reviewed within 3 business
          days. If approved, refunds will be processed within 7-10 business
          days, depending on your payment method.
        </p>
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200">
          I Understand
        </button>
      </div>
    </div>
  );
};

export default RefundPolicy;
