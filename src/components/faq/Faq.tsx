"use client";
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const questionsAndAnswers = [
        {
            question: "What Makes tnpLab Different from Other Training Providers?",
            answer:
                "Our unique blend of comprehensive courses, 24/7 support, and personalized mentoring ensures that each student gets the guidance they need to excel. We focus not just on learning, but also on ensuring students are placement-ready with industry-standard projects."
        },
        {
            question: "How Do tnpLab Courses Prepare Students for Industry Jobs?",
            answer:
                "At tnpLab, we offer industry-level projects that simulate real-world challenges, allowing students to apply their knowledge practically. Our hands-on workshops, combined with theoretical understanding, ensure that students can confidently step into job roles."
        },
        {
            question: "Does tnpLab Offer Any Placement Assistance?",
            answer:
                "Yes! We provide 100% placement assistance. Our dedicated team helps students with resume building, interview preparation, and connects them with top companies looking for fresh talent."
        },
        {
            question: "What Kind of Support Can I Expect as a Student?",
            answer:
                "At tnpLab, we offer round-the-clock support to address all your questions and challenges. Whether it’s a technical query or project guidance, our experts are always available to help."
        },
        {
            question: "How Is tnpLab’s Curriculum Designed?",
            answer:
                "Our curriculum is updated regularly to keep up with industry trends and the latest technologies. We ensure that the knowledge imparted is relevant and in line with current market demands, giving our students a competitive edge."
        }
    ];

    return (
        <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
            {questionsAndAnswers.map((item, index) => (
                <div
                    key={index}
                    className="border border-gray-600 bg-black p-6 rounded-lg mt-4"
                >
                    <button
                        onClick={() => toggleExpand(index)}
                        className="flex items-center justify-between w-full text-left focus:outline-none"
                    >
                        <span className="text-xl font-semibold">{item.question}</span>
                        <ChevronDown
                            className={`transform transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`}
                        />
                    </button>
                    <div
                        className={`mt-4 overflow-hidden transition-all duration-300 ${expandedIndex === index ? "max-h-96" : "max-h-0"}`}
                    >
                        <p className='text-gray-400'>{item.answer}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Faq;
