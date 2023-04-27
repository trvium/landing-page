export default function Pricing() {
  return (
    <section>
      <div id="pricing-id" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Choose Your Plan</h2>
            <p className="text-md text-[#666666]">Upgrade your experience and choose from our selection of subscription packages.</p>
          </div>

          {/* Pricing boxes */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Free Plan */}
            <div className="bg-gray-200 rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="0">
              <h3 className="text-2xl text-[#333333] mb-4">Free</h3>
              <div className="flex">
                <span className="text-[#666666] text-md font-medium">1,000</span>
                <span className="text-[#666666] text-md ml-2">/ month</span>
              </div>
              <p className="text-[#666666] text-md mb-8">API requests</p>
              <div className="flex justify-center mb-8">
                <span className="text-[#333333] text-3xl font-medium">$0</span>
                <span className="text-[#333333] text-lg ml-2">/ month</span>
              </div>
              <a className="bg-[#333333] text-gray-100 py-2 px-6 rounded-full hover:bg-[#666666] transition duration-150 ease-in-out" href="/signup">Choose Plan</a>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-200 rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl text-[#333333] mb-4">Premium</h3>
              <div className="flex">
                <span className="text-[#666666] text-md font-medium">10,000</span>
                <span className="text-[#666666] text-md ml-2">/ month</span>
              </div>
              <p className="text-[#666666] text-md mb-8">API requests</p>
              <div className="flex justify-center mb-8">
                <span className="text-[#333333] text-3xl font-medium">$29</span>
                <span className="text-[#333333] text-lg ml-2">/ month</span>
              </div>
              <a className="bg-[#5D5DFF] text-gray-100 py-2 px-6 rounded-full hover:bg-[#38379C] transition duration-150 ease-in-out" href="/signup">Choose Plan</a>
            </div>

            {/* Professional Plan */}
            <div className="bg-gray-200 rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl text-[#333333] mb-4">Professional</h3>
              <div className="flex">
                <span className="text-[#666666] text-md font-medium">50,000</span>
                <span className="text-[#666666] text-md ml-2">/ month</span>
              </div>
              <p className="text-[#666666] text-md mb-8">API requests</p>
              <div className="flex justify-center mb-8">
                <span className="text-[#333333] text-3xl font-medium">$99</span>
                <span className="text-[#333333] text-lg ml-2">/ month</span>
              </div>
              <a className="bg-[#333333] text-gray-100 py-2 px-6 rounded-full hover:bg-[#666666] transition duration-150 ease-in-out" href="/signup">Choose Plan</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
