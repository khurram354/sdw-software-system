import React from "react";
import TermsAndConditions from "@/components/frontend/termsandconditions/TermsAndConditions";

export default function termsandconditions() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-900 to-gray-950 text-white py-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      <TermsAndConditions />
    </div>
  );
};
