"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <Accordion type="multiple" className="w-full space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base cursor-pointer">How does the mock interview process work?</AccordionTrigger>
          <AccordionContent className="text-base">
            Our mock interview tool mimics real-life interviews. You’ll be presented with
            questions and respond using your webcam and microphone. You can review your
            answers and get feedback if enabled.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base cursor-pointer">Do I need to allow access to my webcam and microphone?</AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. For full functionality, access is needed. However, we only use it during
            the interview session and never store or transmit this data without your consent.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base cursor-pointer">How is my data protected?</AccordionTrigger>
          <AccordionContent className="text-base">
            All data is transmitted over secure HTTPS, and sensitive information is encrypted
            both in transit and at rest. Webcam and mic data is never stored unless you
            explicitly save it.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-base cursor-pointer">Are there any tutorials to help me prepare?</AccordionTrigger>
          <AccordionContent className="text-base">
            Yes! Check out our recommended tutorials: the tutorials are present under the Resources section.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-base cursor-pointer">How do I upgrade my plan?</AccordionTrigger>
          <AccordionContent className="text-base">
            You can upgrade your plan anytime by visiting the <strong>Upgrade</strong> section
            . Choose the desired plan and complete the payment
            through our secure checkout.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-base cursor-pointer">How do I take a mock interview?</AccordionTrigger>
          <AccordionContent className="text-base">
            After signing in, go to the "Dashboard" section, choose your job position or
            job description (Tech stack) and years of experience, and allow webcam/microphone access. Once ready, click
            "Start Interview" to start the session.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger className="text-base cursor-pointer">How can I raise a support ticket?</AccordionTrigger>
          <AccordionContent className="text-base">
            If you face any issues, head to the <strong>Support</strong> section in your
            dashboard. Fill out the form and our team will get
            back to you within 24 hours. Alternatively, email us at
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
