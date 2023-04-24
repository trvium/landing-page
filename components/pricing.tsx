export default function Pricing() {
  return (
    <section>
      <div id="pricing-id" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-400">Lorem ipsum.</p>
          </div>

          {/* Pricing boxes */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Free Plan */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="0">
              <h3 className="text-2xl text-gray-100 mb-4">Free</h3>
              <div className="flex">
                <span className="text-gray-200 text-md font-medium">1,000</span>
                <span className="text-gray-200 text-md ml-2">/ month</span>
              </div>
              <p className="text-gray-400 text-md mb-8">API requests</p>
              <div className="flex justify-center mb-8">
                <span className="text-gray-100 text-3xl font-medium">$0</span>
                <span className="text-gray-100 text-lg ml-2">/ month</span>
              </div>
              <button className="bg-purple-600 text-gray-100 py-2 px-6 rounded-full hover:bg-purple-500 transition duration-150 ease-in-out">Choose Plan</button>
            </div>

            {/* Premium Plan */}
            <div className="bg-purple-600 rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl text-gray-100 mb-4">Premium</h3>
              <div className="flex">
                <span className="text-gray-200 text-md font-medium">10,000</span>
                <span className="text-gray-200 text-md ml-2">/ month</span>
              </div>
              <p className="text-gray-400 text-md mb-8">API requests</p>
              <div className="flex justify-center mb-8">
                <span className="text-gray-100 text-3xl font-medium">$29</span>
                <span className="text-gray-100 text-lg ml-2">/ month</span>
              </div>
              <button className="bg-gray-100 text-purple-600 py-2 px-6 rounded-full hover:bg-gray-200 transition duration-150 ease-in-out">Choose Plan</button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl text-gray-100 mb-4">Professional</h3>
              <div className="flex">
                <span className="text-gray-200 text-md font-medium">50,000</span>
                <span className="text-gray-200 text-md ml-2">/ month</span>
              </div>
              <p className="text-gray-400 text-md mb-8">API requests</p>
              <div className="flex justify-center mb-8">
                <span className="text-gray-100 text-3xl font-medium">$99</span>
                <span className="text-gray-100 text-lg ml-2">/ month</span>
              </div>
              <button className="bg-purple-600 text-gray-100 py-2 px-6 rounded-full hover:bg-purple-500 transition duration-150 ease-in-out">Choose Plan</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
