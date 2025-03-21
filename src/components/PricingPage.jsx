import React from "react";
import { Link } from "react-router-dom";
import { Check, AlertCircle, IndianRupee, } from "lucide-react";


const PricingSection = () => {
  const plans = [
    {
      name: "Static Website",
      price: "11,999",
      period: "starting price",
      description: "Perfect for small businesses and personal portfolios",
      color: "orange",
      features: [
        "5 Pages included",
        "Responsive design",
        "Basic SEO setup",
        "Contact form",
        "Social media integration",
        "1 round of revisions",
      ],
      limitations: [
        "No content management system",
        "No database functionality",
        "Limited interactivity",
      ],
      isPopular: false,
    },
    {
      name: "Dynamic Website",
      price: "18,999",
      period: "starting price",
      description: "Ideal for growing businesses with changing content",
      color: "green",
      features: [
        "10 Pages included",
        "Responsive design",
        "Content Management System",
        "Advanced SEO setup",
        "Blog functionality",
        "User authentication",
        "Admin dashboard",
        "2 rounds of revisions",
      ],
      limitations: [],
      isPopular: true,
    },
    {
      name: "E-Commerce Website",
      price: "35,999",
      period: "starting price",
      description: "Complete solution for online stores and marketplaces",
      color: "blue",
      features: [
        "Unlimited products",
        "Payment gateway integration",
        "Inventory management",
        "Order tracking system",
        "Customer accounts",
        "Wishlist & cart functionality",
        "Product reviews & ratings",
        "Discount & coupon system",
        "3 rounds of revisions",
      ],
      limitations: [],
      isPopular: false,
    },
  ];

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Website Development Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional, responsive websites tailored to your business needs.
            All plans include free hosting for the first year.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${
                plan.isPopular
                  ? "ring-2 ring-pink-400 transform md:-translate-y-2"
                  : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-pink-400 text-white px-3 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <IndianRupee
                    className={`w-5 h-5 text-${plan.color}-400 mr-1`}
                  />
                  <span
                    className={`text-3xl font-extrabold text-${plan.color}-400`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <Link to={"/contact-us"}
                  className={`w-full py-2 px-4 rounded-md font-medium ${
                    plan.isPopular
                      ? "bg-pink-400 text-white"
                      : `border border-${plan.color}-400 text-${plan.color}-400`
                  }`}
                >
                  Get a Quote
                </Link>
              </div>

              <div className="p-6 bg-gray-50 border-t">
                <p className="font-medium mb-4">What&apos;s included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check
                        className={`h-5 w-5 text-${plan.color}-400 mr-2 flex-shrink-0`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <>
                    <p className="font-medium mb-4 mt-6">Limitations:</p>
                    <ul className="space-y-3">
                      {plan.limitations.map((limitation) => (
                        <li key={limitation} className="flex items-start">
                          <AlertCircle className="h-5 w-5 text-gray-600 mr-2 flex-shrink-0" />
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-600 max-w-2xl mx-auto">
          <p>
            All prices are in Indian Rupees (₹). Actual pricing may vary based
            on specific requirements and project complexity.
          </p>
          <p className="mt-2">
            Contact us for a detailed quote tailored to your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
