import { Button } from '@/components/ui/button';
import { X, Check } from 'lucide-react';
import React from 'react';

const UpgradePage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-8 px-4">
      <div className="flex flex-col gap-2 justify-center items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-black">Upgrade</h1>
        <p className="text-sm md:text-base text-gray-500">
          Upgrade to monthly plan to access unlimited mock interviews
        </p>
      </div>

      {/* Plans */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 w-full max-w-6xl">
        
        {/* Free Plan */}
        <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-lg justify-center items-center w-full md:w-[350px] py-8 px-6">
          <h3 className="text-sm font-bold text-black">Free</h3>
          <h1 className="text-2xl md:text-3xl text-black mb-3">
            <strong>0$</strong> <span className="text-sm text-black">/month</span>
          </h1>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2">
              <Check size={18} />
              <p className="text-gray-800 text-sm font-medium">Create 3 Free Mock Interviews</p>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} />
              <p className="text-gray-800 text-sm font-medium">Unlimited Retake Interviews</p>
            </div>
            <div className="flex items-center gap-2">
              <X size={18} />
              <p className="text-gray-800 text-sm font-medium">Practice Questions</p>
            </div>
            <div className="flex items-center gap-2">
              <X size={18} />
              <p className="text-gray-800 text-sm font-medium">Exclusive App Access</p>
            </div>
            <div className="flex items-start gap-2">
              <X size={18} />
              <p className="text-gray-800 text-sm font-medium">Email Support</p>
            </div>
          </div>

          <Button variant="lg" className="rounded-full text-black text-sm px-10 py-2 border-2 border-[#4e4ee3] cursor-pointer mt-4">
            Get Started
          </Button>
        </div>

        {/* Monthly Plan */}
        <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-lg justify-center items-center w-full md:w-[350px] py-8 px-6">
          <h3 className="text-sm font-bold text-black">Monthly</h3>
          <h1 className="text-2xl md:text-3xl text-black mb-3">
            <strong>7.99$</strong> <span className="text-sm text-black">/month</span>
          </h1>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2">
              <Check size={18} />
              <p className="text-gray-800 text-sm font-medium">Create 3 Free Mock Interviews</p>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} />
              <p className="text-gray-800 text-sm font-medium">Unlimited Retake Interviews</p>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} />
              <p className="text-gray-800 text-sm font-medium">Practice Questions</p>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} />
              <p className="text-gray-800 text-sm font-medium">Exclusive App Access</p>
            </div>
            <div className="flex items-start gap-2">
              <Check size={18} />
              <p className="text-gray-800 text-sm font-medium">Email Support</p>
            </div>
          </div>

          <Button variant="lg" className="rounded-full text-black text-sm px-10 py-2 border-2 border-[#4e4ee3] cursor-pointer mt-4">
            Get Started
          </Button>
        </div>

      </div>
    </div>
  );
};

export default UpgradePage;
