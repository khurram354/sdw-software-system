import React from "react";
import HeroIndustry from "@/components/frontend/industries/HeroIndustry";
import { Solution } from "@/components/frontend/industries/Solution";
import AllNeeds from "@/components/frontend/industries/AllNeeds";
import CTAIndustry from "@/components/frontend/industries/CTAIndustry";

const IndustriesPage = () => {
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
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
      <HeroIndustry containerVariants={containerVariants} itemVariants={itemVariants} fadeInUp={fadeInUp} />
      <Solution containerVariants={containerVariants} itemVariants={itemVariants} />
      <AllNeeds containerVariants={containerVariants} itemVariants={itemVariants}/>
      <CTAIndustry/>
    </div>
  );
};

export default IndustriesPage;