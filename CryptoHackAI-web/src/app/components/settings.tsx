import React from 'react'

const settingsScreen = () => {
  return (
    <div className='bg-[#B4AB9A]'>
      <div className="min-h-screen w-full p-4 flex items-start justify-center">
      <div className="fixed top-[194px] left-[353px] w-[641px] h-[790px] rounded-[60px] bg-white shadow-[0_0_40px_rgba(0,0,0,0.08)]">
        <div className="p-12 h-full flex flex-col">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          </div>

          {/* Form */}
          <form className="flex-1 flex flex-col gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full h-12 px-4 rounded-lg border border-gray-300 text-gray-900 text-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
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
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full h-12 px-4 rounded-lg border border-gray-300 text-gray-900 text-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200"
                placeholder="Choose a username"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <input
                type="text"
                id="bio"
                className="w-full h-12 px-4 rounded-lg border border-gray-300 text-gray-900 text-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200"
                placeholder="Tell us about yourself"
              />
            </div>

            <button
              type="submit"
              className="mt-auto w-full h-12 bg-blue-500 text-white rounded-lg text-lg font-medium
                       hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default settingsScreen
