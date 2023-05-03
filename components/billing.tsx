export default function Billing() {
  return (
    <section>
      <div id="pricing-id" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 mb-60">
          {/* Pricing boxes */}
          <div className="mt-20 max-w-sm mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">
            
            {/* Free Plan */}
            <div className="bg-gray-200 rounded-lg shadow-lg p-8 text-center" data-aos="fade-up" data-aos-delay="0">
              <h3 className="text-2xl text-gray-400 mb-4 font-semibold">Hobby</h3>
              <div className="text-center">
                <span className="text-gray-300 text-md font-medium">50</span>
                <span className="text-gray-300 text-md ml-2">/ month</span>
              </div>
              <p className="text-gray-300 text-md mb-8">API requests</p>
              <div className="flex justify-center mb-8">
                <span className="text-gray-400 text-3xl font-medium">$2</span>
                <span className="text-gray-400 text-lg ml-2">/ month</span>
              </div>
              <a className="bg-gray-400 text-white py-2 px-6 rounded-full hover:bg-gray-300 transition duration-150 ease-in-out" href="/dashboard">Choose Plan</a>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-200 rounded-lg shadow-lg p-8 text-center" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl text-gray-400 mb-4 font-semibold">Business</h3>
              <div className="text-center">
                <span className="text-gray-300 text-md font-medium">250</span>
                <span className="text-gray-300 text-md ml-2">/ month</span>
              </div>
              <p className="text-gray-300 text-md mb-8">API requests</p>
              <div className="flex justify-center mb-8">
                <span className="text-gray-400 text-3xl font-medium">$6</span>
                <span className="text-gray-400 text-lg ml-2">/ month</span>
              </div>
              <a className="bg-purple-300 text-white py-2 px-6 rounded-full hover:bg-purple-500 transition duration-150 ease-in-out" href="/dashboard">Choose Plan</a>
            </div>

            {/* Professional Plan */}
            <div className="bg-gray-200 rounded-lg shadow-lg p-8 text-center" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl text-gray-400 mb-4 font-semibold">Enterprise</h3>
              <div className="text-center">
                <span className="text-gray-300 text-md font-medium">500</span>
                <span className="text-gray-300 text-md ml-2">/ month</span>
              </div>
              <p className="text-gray-300 text-md mb-8">API requests</p>
              <div className="flex justify-center mb-8">
                <span className="text-gray-400 text-3xl font-medium">$10</span>
                <span className="text-gray-400 text-lg ml-2">/ month</span>
              </div>
              <a className="bg-gray-400 text-white py-2 px-6 rounded-full hover:bg-gray-300 transition duration-150 ease-in-out" href="/dashboard">Choose Plan</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
