import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-teal-50 p-4" 
    style={{
        backgroundImage: "url('./background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="bg-white shadow-md rounded p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-teal-800">About Travel Wise</h2>
        <p className="text-lg mb-4 text-teal-700">
          Travel Wise is your ultimate companion for seamless travel planning. Our platform helps you organize trips, find the best destinations, and stay informed about travel tips and guides.
        </p>
        <p className="text-lg text-teal-700">
          Whether you are exploring new places or revisiting favorites, Travel Wise ensures you make the most of your journey.
        </p>
      </div>
    </section>
  );
};

export default About;