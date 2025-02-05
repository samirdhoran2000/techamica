import React from 'react';
import { Code2, Brain, Car, ClipboardCheck, ShoppingBag, Building2, CalendarDays, Building, MessageSquare, Download, Bike } from 'lucide-react';

const Team = () => {
 const projects = [
   {
     id: 1,
     title: "Om Sai Event",
     description:
       "Professional event management service specializing in weddings, corporate events, birthdays, and live shows. Offers end-to-end solutions with creative themes, stunning décor, catering, and seamless execution for memorable celebrations.",
     icon: CalendarDays,
     tech: "Angular & Typescript",
   },
   {
     id: 2,
     title: "Shivganesh Cyber Cafe",
     description:
       "Maha E-Seva Kendra providing government & digital services including Aadhaar updates, PAN card, GST registration, online applications, and bill payments. Expert assistance for seamless service delivery.",
     icon: Building,
     tech: "PHP & HTML",
   },
   {
     id: 3,
     title: "Automated WhatsApp Reminder",
     description:
       "WPF application for automated WhatsApp message scheduling using Selenium WebDriver. Features contact management, message templating, and scheduled delivery through WhatsApp Web automation.",
     icon: MessageSquare,
     tech: "C# WPF & Selenium",
   },
   {
     id: 4,
     title: "ScrapeMasterX",
     description:
       "Universal cross-platform web and PDF scraping tool built with Python and Kivy. Features real-time scraping, data export, and filtering functionalities, supporting Windows, macOS, Linux, and mobile devices.",
     icon: Download,
     tech: "Python & Kivy",
   },
   {
     id: 5,
     title: "Hinjawadi Bike",
     description:
       "Premier bike rental service in Hinjawadi, Pune, Maharashtra. Offering premium motorcycles for rent with top-tier service for an exceptional riding experience.",
     icon: Bike,
     tech: "React & Tailwind",
   },
   {
     id: 6,
     title: "RetailBuddy",
     description:
       "Comprehensive retail management system for small to mid-sized businesses, featuring product listing, order tracking, inventory management, and customer engagement capabilities.",
     icon: ShoppingBag,
     tech: "Angular & .NET Core",
   },
 ];

  return (
    <div className="px-4 md:px-16 py-8 md:py-12 bg-gray-50" id='portfolio'>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Our Featured Projects
      </h2>
      <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
        Innovative solutions built with cutting-edge technologies
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const IconComponent = project.icon;
          return (
            <div key={project.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="ml-3 font-semibold text-lg">{project.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                {project.description}
              </p>
              <div className="text-sm font-medium text-blue-600">
                {project.tech}
              </div>
            </div>
          )
        } )
        }
      </div>
    </div>
  );
};

export default Team;