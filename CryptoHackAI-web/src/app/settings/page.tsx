import React from 'react';

const SettingsScreen = () => {
  return (
    <div className="bg-[#B4AB9A] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg sm:w-3/6 rounded-[40px] sm:rounded-[60px] bg-[#f8fafc] shadow-[0_0_40px_rgba(0,0,0,0.08)] mt-10 mb-10">
        <div className="p-6 sm:p-12 h-full flex flex-col">
          
          <div className="mb-6 sm:mb-10">
            <h1 className="text-2xl sm:text-4xl flex justify-center font-bold text-gray-900">
              Profile Settings
            </h1>
          </div>

        
          <div className="lg:w-9/12 sm:w-7/12 mx-auto rounded-[20px] border bg-white p-5">
            <form className="flex-1 flex flex-col gap-6 sm:gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 text-gray-900 text-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                  Resume
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 text-gray-900 text-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Personal Website
                </label>
                <input
                  type="text"
                  id="website"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 text-gray-900 text-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200"
                  placeholder="Enter your website"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="git" className="block text-sm font-medium text-gray-700">
                  Github
                </label>
                <input
                  type="text"
                  id="git"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 text-gray-900 text-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200"
                  placeholder="Enter your Github"
                />
              </div>

              <button
                type="submit"
                className="mt-auto w-full h-12 bg-black text-white rounded-lg text-lg font-medium
                active:bg-black transition-colors duration-200 focus:outline-none focus:ring-2
                focus:ring-blue-500 focus:ring-offset-2"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
