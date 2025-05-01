import { useState } from "react";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Why should I choose Humestic?",
            answer:
                "Bottleneck mice my capacity is full, not monetization we need to start advertising on social media, or helicopter view, for what the. Let’s put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen? If you're not hurting you're not winning loop back.",
        },
        {
            question: "I like your works, how do we start a project?",
            answer: "Bottleneck mice my capacity is full, not monetization we need to start advertising on social media, or helicopter view, for what the. Let’s put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen? If you're not hurting you're not winning loop back.",
        },
        {
            question: "What info is required to get a quotation?",
            answer: "Bottleneck mice my capacity is full, not monetization we need to start advertising on social media, or helicopter view, for what the. Let’s put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen? If you're not hurting you're not winning loop back.",
        },
    ];

    return (
        <div className="container mx-auto px-4 md:px-2 lg:px-3 space-y-4">
            <div className="lg:flex lg:gap-24 md:mb-12 font-questrial">
                <div className="md:text-2xl text-[#031e4c] mb-3 md:mb-0">
                    <p>Frequently asked <br /> questions</p>
                </div>
                <div className="flex-1 text-3xl text-center lg:text-left leading-8 md:text-6xl text-[#181519]">
                    <h2>Constant collaboration is how we roll. Let's see if we are a good fit.</h2>
                </div>
            </div>
            {faqData.map((faq, index) => (
                <div
                    key={index}
                    className="border-b border-[#cbc6ce] pb-4"
                >
                    <button
                        className="flex justify-between items-center w-full text-left"
                        onClick={() => toggle(index)}
                    >
                        <div className="flex items-center gap-2 font-questrial">
                            <span className="text-xl text-[#8d7d50]">{String(index + 1).padStart(2, "0")}</span>
                            <span className="text-lg md:text-xl text-[#231d25]">{faq.question}</span>
                        </div>
                        <span className="text-2xl text-[#151416]">
                            {openIndex === index ? "−" : "+"}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                            } text-sm text-gray-500 font-inter`}
                    >
                        <div className="py-2 text-[#6a666b]">{faq.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
