"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CustomButton from "../shared/customButton";
import TalkToExpert from "@/assets/common/TalkToExpert.png";
import UserPlus from "@/assets/common/userPlus.png";

interface HireInstantlyFormProps {
  onRegister: () => void;
  onTalkToExpert: () => void;
  onBack: () => void;
}

type OptionType = "register" | "expert" | null;

const HireInstantlyForm: React.FC<HireInstantlyFormProps> = ({
  onRegister,
  onTalkToExpert,
  onBack,
}) => {
  const [selectedOption, setSelectedOption] = useState<OptionType>(null);

  const handleOptionSelect = (option: OptionType) => {
    setSelectedOption(option);
  };

  const handleProceed = () => {
    if (selectedOption === "register") {
      onRegister();
    } else if (selectedOption === "expert") {
      onTalkToExpert();
    }
  };

  return (
    <div className="text-white rounded-lg w-full max-w-xl mx-auto">
      <div className="flex justify-between mb-6 items-start">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Hire Instantly</h2>
          <p className="text-gray-300 text-sm">
            Please select the options below
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Card
          className={`cursor-pointer transition-all duration-200 backdrop-blur-2xl bg-white/5 border-white/20 ${
            selectedOption === "register"
              ? "border-brand-500 bg-brand-900/20"
              : ""
          }`}
          onClick={() => handleOptionSelect("register")}
        >
          <CardContent className="flex items-center gap-3">
            <div>
              <Image src={UserPlus} alt="UserPlus" className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-white">Register your account</h3>
            </div>
            <div className="flex-shrink-0">
              {selectedOption === "register" ? (
                <CheckCircle2 className="w-5 h-5 text-brand-400" />
              ) : (
                <Circle className="w-5 h-5 text-gray-500" />
              )}
            </div>
          </CardContent>
        </Card>

        <Card
          className={`cursor-pointer transition-all duration-200 backdrop-blur-2xl bg-white/5 border-white/20 ${
            selectedOption === "expert"
              ? "border-brand-500 bg-brand-900/20"
              : ""
          }`}
          onClick={() => handleOptionSelect("expert")}
        >
          <CardContent className="flex items-center gap-3">
            <div>
              <Image
                src={TalkToExpert}
                alt="TalkToExpert"
                className="w-6 h-6"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-white">Talk to our expert</h3>
            </div>
            <div className="flex-shrink-0">
              {selectedOption === "expert" ? (
                <CheckCircle2 className="w-5 h-5 text-brand-400" />
              ) : (
                <Circle className="w-5 h-5 text-gray-500" />
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center mt-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-400 hover:text-white hover:bg-gray-800/50 flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          Go Back
        </Button>

        <CustomButton onClick={handleProceed}>Proceed</CustomButton>
      </div>
    </div>
  );
};

export default HireInstantlyForm;
