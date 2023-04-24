export const metadata = {
  title: 'Reset Password - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'

export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Forgot your password?</h1>
            <p className="text-xl text-[#666666]">We'll email you instructions on how to reset it.</p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-[#666666] text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-input w-full text-[#D9D9D9]" placeholder="you@yourcompany.com" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-[#5D5DFF] hover:bg-[#38379C] w-full">Reset Password</button>
                </div>
              </div>
            </form>
            <div className="text-[#666666] text-center mt-6">
              <Link href="/signin" className="text-[#5D5DFF] hover:text-[#D9D9D9] transition duration-150 ease-in-out">Cancel</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
