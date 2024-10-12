import React from 'react'

const Whytnplab = () => {
    return (
        <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose tnpLab?</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Expert Instructors", description: "Learn from industry professionals with years of real-world experience." },
                    { title: "Cutting-Edge Curriculum", description: "Stay ahead with our constantly updated course material reflecting the latest industry trends." },
                    { title: "Hands-On Projects", description: "Apply your skills to real-world scenarios and build a impressive portfolio." },
                    { title: "Career Support", description: "Benefit from our extensive network and dedicated career services team." },
                    { title: "Flexible Learning", description: "Choose from various learning formats to fit your schedule and preferences." },
                    { title: "100% Placement Guarantee", description: "We're committed to your success with our job placement guarantee." },
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`p-0.25 rounded-[1.4375rem] transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 animate-fadeIn bg-conic-gradient`}
                        style={{ animationDelay: `${100 * index}ms` }}
                    >
                        <div className="bg-black p-6 rounded-[1.4375rem]">
                            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                            <p className='text-gray-300'>{item.description}</p>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    )
}

export default Whytnplab