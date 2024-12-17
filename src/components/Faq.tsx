import React, { useState } from "react";

const faqs = [
  {
    question: "What cars do you have in your inventory?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris.",
  },
  {
    question: "What cars do you have in your inventory?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris.",
  },
  {
    question: "What cars do you have in your inventory?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris.",
  },
  {
    question: "What cars do you have in your inventory?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris.",
  },
  {
    question: "What cars do you have in your inventory?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris.",
  },
];

const Faq= () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
      <p className="text-center mb-10">
        If you have any questions that aren’t listed below, please send your
        question to:{" "}
         <u>info@ExpatGlobalGirls.com</u> 
    
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg bg-white">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
            >
              <span className="font-semibold text-lg">
                {faq.question}
              </span>
              <span className="text-gray-500">
                {openIndex === index ? "➖" : "➕"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
