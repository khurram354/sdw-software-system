import React from "react";
import HeroContact from "@/components/frontend/contact/HeroContact";
import ContactForm from "@/components/frontend/contact/ContactForm";
import FAQ from "@/components/frontend/contact/FAQ";

const BookDemoPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-900 to-gray-950 text-white">
      <HeroContact containerVariants={containerVariants} itemVariants={itemVariants} fadeInUp={fadeInUp}/>
      <ContactForm containerVariants={containerVariants} itemVariants={itemVariants}/>
      <FAQ containerVariants={containerVariants} itemVariants={itemVariants}/>
    </div>
  );
};

export default BookDemoPage;