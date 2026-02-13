import React from "react";
import HeroFeature from "@/components/frontend/features/HeroFeature";
import DistributionFeature from "@/components/frontend/features/DistributionFeature";
import MeasureableResult from "@/components/frontend/features/MeasureableResult";
import CTAFeature from "@/components/frontend/features/CTAFeature";

const FeaturesPage = () => {
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
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-800 text-white">
      <HeroFeature containerVariants={containerVariants} itemVariants={itemVariants} fadeInUp={fadeInUp}/>
      <DistributionFeature containerVariants={containerVariants} itemVariants={itemVariants}/>
      <MeasureableResult containerVariants={containerVariants} itemVariants={itemVariants}/> 
      <CTAFeature/>     
    </div>
  );
};

export default FeaturesPage;