export const metadata = {
  title: 'Validate Email - Trvium',
  description: 'Validate Email',
}

import Link from 'next/link'

export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Validate your account.</h1>
            <div className="text-xl text-[#666666]">
              <span className="text-[#666666]">Enter the code sent to </span>
              <span className="text-[#666666] font-medium">mail@mail.com</span>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-[#666666] text-sm font-medium mb-1" htmlFor="code">Code</label>
                  <input id="code" type="code" className="form-input w-full text-[#666666]" placeholder="Code received in email" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-[#5D5DFF] hover:bg-[#38379C] w-full">Validate account</button>
                </div>
              </div>
            </form>
            <div className="text-[#666666] text-center mt-6">
              Didn’t receive the verification code? <button className="text-[#5D5DFF] hover:text-gray-200 transition duration-150 ease-in-out">Resend code</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
