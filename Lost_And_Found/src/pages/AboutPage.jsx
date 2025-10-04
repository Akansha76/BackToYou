import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-100 px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="https://www.designbolts.com/wp-content/uploads/2019/01/Business-Deal-Free-Stock-Photo-1.jpg" // <- replace with your image path
            alt="Lost and Found Illustration"
            className="rounded-2xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-black mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-900 mb-4">
            Welcome to our <span className="font-semibold text-indigo-600">Back2You</span> platform!  
            Our mission is to help people report, track, and recover lost items in a simple and 
            efficient way. Whether you’ve misplaced something valuable or found an item that 
            doesn’t belong to you, this platform connects people to reunite lost belongings with 
            their rightful owners.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-900 mb-4">
            We believe in building a helpful and trustworthy community. 
            By sharing lost or found items, you’re not just helping someone, 
            you’re spreading kindness.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-900">
            Start exploring our website to <span className="font-medium">report a lost item</span>, 
            <span className="font-medium"> list a found item</span>, or 
            <span className="font-medium"> browse recent posts</span>. Together, we make finding things easier!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
