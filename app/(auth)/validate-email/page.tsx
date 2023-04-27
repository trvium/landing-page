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
            <div className="text-xl text-gray-300">
              <span className="text-gray-300">Enter the code sent to </span>
              <span className="text-gray-300 font-medium">mail@mail.com</span>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="code">Code</label>
                  <input id="code" type="code" className="form-input w-full text-gray-300" placeholder="Code received in email" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-300 hover:bg-[#38379C] w-full">Validate account</button>
                </div>
              </div>
            </form>
            <div className="text-gray-300 text-center mt-6">
              Didn’t receive the verification code? <button className="text-purple-300 hover:text-gray-200 transition duration-150 ease-in-out">Resend code</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
