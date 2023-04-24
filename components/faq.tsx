export default function FAQ() {
  return (
    <section>
      <div id="faq-id" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800"> 
        
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4">Frequently Asked Questions</h2>
        </div>

        {/* FAQ section */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-[#666666]" data-aos="fade-up" data-aos-delay="100">

          {/* Question 1 */}
          <div>
            <h3 className="text-xl font-medium mb-4">What do I get with each plan?</h3>
            <p className="text-sm">With the Basic plan, you get access to our platform and all its features. The Premium plan includes everything from the Basic plan, as well as additional tools and resources. The Pro plan is our most comprehensive plan, offering all the features of the Basic and Premium plans, plus priority support and more.</p>
          </div>

          {/* Question 2 */}
          <div>
            <h3 className="text-xl font-medium mb-4">Can I switch plans at any time?</h3>
            <p className="text-sm">Yes, you can switch plans at any time by logging into your account and selecting the plan you want to switch to. Your new plan will be effective immediately and any unused portion of your previous plan will be prorated and applied as a credit towards your new plan.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
  );
}