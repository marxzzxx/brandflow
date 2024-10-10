'use client'
import React, { useState } from "react";

export default function FAQ() {
  const [openFAQs, setOpenFAQs] = useState<Record<number, boolean>>({});

  const faqs = [
    {
      question: "What is brandflow?",
      answer: "Brandflow is a personal branding agency that helps entrepreneurs and small business owners create impactful online presences through tailored content creation and web development services.",
    },
    {
        question: "What types of services does brandflow offer?",
        answer: "Brandflow is a personal branding agency that helps entrepreneurs and small business owners create impactful online presences through tailored content creation and web development services.",
    },
    {
        question: "What industries do you specialize in?",
        answer: "While we cater to various industries, we have a particular focus on tech and lifestyle sectors, helping you and your brand establish a strong online presence.",
    },
    {
        question: "How does the branding process work at Brandflow?",
        answer: "Our process typically involves an initial consultation, strategy development, design implementation, and ongoing support to ensure your brand remains relevant and effective.",
    },
    {
        question: "What makes Brandflow different from other branding agencies?",
        answer: "Brandflow combines personalized service with a focus on storytelling and strategy, ensuring that each brand we work with is unique and resonates with its target audience.",
    },
    {
        question: "Is Brandflow only for new businesses?",
        answer: "No, we work with both new and established businesses looking to refresh their branding or improve their online presence.",
    },
    {
        question: "Can you help with existing websites?",
        answer: "Absolutely! We can audit your current website, provide recommendations, and implement necessary improvements to enhance your online presence.",
    },{
        question: "How do you ensure my brand stands out from competitors?",
        answer: "We conduct thorough market research and competitor analysis to identify unique positioning opportunities, ensuring your brand has a distinctive voice and visual identity.",
    },
    {
        question: "How can I contact Brandflow for more information?",
        answer: "You can reach us via our website contact form and email. We look forward to hearing from you!",
    },
    // ... rest of your FAQs
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-500">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl whitespace-wrap">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <dt className="flex w-full items-start justify-between text-left text-black">
                  <span
                    className="text-base font-semibold leading-7 text-black cursor-pointer"
                    onClick={() =>
                      setOpenFAQs((prevOpenFAQs) => ({
                        ...prevOpenFAQs,
                        [index]: !prevOpenFAQs[index],
                      }))
                    }
                  >
                    {faq.question}
                  </span>
                </dt>
                {openFAQs[index] && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
