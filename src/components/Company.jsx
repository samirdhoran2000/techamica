import React, { useState } from "react";
import {
  Phone,
  Mail,
  Globe,
  Menu,
  X,
  MessageCircle,
  FileText,
  Users,
  Monitor,
} from "lucide-react";
import Header from "./Header";
import Hero from "./Hero";
import Feature from "./Feature";
import Footer from "./Footer";
import Cta from "./Cta";
import Team from "./Team";
import Services from "./Services";
import ContactForm from "./ContactUs";

const WebAgencySite = () => {

  const imgPath = "./bridge.webp"

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header/>

      {/* Hero Section */}
     <Hero/>

      {/* Features Grid */}
      
      <Feature />

      {/* Agency Section */}
      <Services />

      {/* Team Section */}
      <Team />
      
      {/* Contact Section */}
      <ContactForm />

      {/* CTA Section */}
    <Cta />

      {/* Footer */}
     {/* <Footer /> */}
    </div>
  );
};






export default WebAgencySite;
