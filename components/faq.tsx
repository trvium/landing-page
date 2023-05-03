export default function FAQ() {
  return (
    <section>
      <div id="faq-id" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200"> 
        
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4">Frequently Asked Questions</h2>
        </div>

        {/* FAQ section */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-300" data-aos="fade-up" data-aos-delay="100">

          {/* Question 1 */}
          <div>
            <h3 className="text-xl font-medium mb-4">Why wasn't I charged when switching plans?</h3>
            <p className="text-sm">Our pricing is currently only a statement, which means you can switch plans whenever you want to test the features without being charged. You will only be charged when you select a paid plan and complete the payment process.</p>
          </div>

          {/* Question 2 */}
          <div>
            <h3 className="text-xl font-medium mb-4">Why do I have limited information on the dashboard when logging in?</h3>
            <p className="text-sm">Our dashboard is still in development, and we are working hard to finalize it. However, if you would like to contribute to the development of the dashboard or any other aspect of our Saas landing page template, our repository is public and we welcome contributions from the community.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
  );
}