import { MessageCircle, FileText, Users, Monitor } from "lucide-react";

const Feature = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-orange-400" />,
      bgColor: "#fdefd4",
      title: "Expert Team",
      description: "Skilled professionals with years of industry experience.",
    },
    {
      icon: <FileText className="w-8 h-8 text-green-400" />,
      bgColor: "#e2e9da",
      title: "Custom Solutions",
      description: "Every project is tailored to meet unique business needs.",
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      bgColor: "#fae5e5",
      title: "Cutting-Edge Technologies",
      description:
        "We use the latest tech to build fast, secure, and scalable websites.",
    },
    {
      icon: <Monitor className="w-8 h-8 text-blue-400" />,
      bgColor: "#d3effa",
      title: "Client-Centric Approach",
      description: "We believe in collaboration and transparency.",
    },
  ];

  return (
    <div className=" bg-white p-8" id="portfolio">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Side - Feature Grid */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={` rounded-2xl p-6 h-48 transition-transform hover:scale-105 cursor-pointer`}
              style={{
                backgroundColor: feature.bgColor,
              }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2">
          <div
            className="bg-gray-50 relative rounded-2xl p-8 h-full overflow-hidden"
            style={{ backgroundColor: "#f3e9ea" }}
          >
            {/* Content wrapper with proper z-index */}
            <div className="relative z-10">
              {/* Main heading */}
              <h1 className="text-4xl font-bold mt-2 mb-6 leading-tight">
                Building Digital Experiences That Drive Success
              </h1>

              {/* Two paragraphs */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                We craft high performance websites and applications tailored to
                your business needs. Our expert team combines design,
                technology, and strategy to create seamless user experience
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From startups to enterpeises, we build scalable and Future-ready
                digital solutions
              </p>

              {/* Button */}
              <button
                className="text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors relative"
                style={{ backgroundColor: "#ca4065" }}
              >
                Get started
              </button>
            </div>

            {/* Image positioned in the bottom right with lower z-index */}
            <div className="absolute bottom-0 right-0 w-3/5 z-0">
              <img
                src="./Tablet.png"
                alt="Collaboration"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
