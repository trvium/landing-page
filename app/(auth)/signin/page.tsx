export const metadata = {
  title: 'Sign In - Trvium',
  description: 'Sign In',
}

import Link from 'next/link'

export default function SignIn() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome back.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-[#666666] text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-input w-full text-[#666666]" placeholder="you@yourcompany.com" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-[#666666] text-sm font-medium mb-1" htmlFor="password">Password</label>
                  <input id="password" type="password" className="form-input w-full text-[#666666]" placeholder="Password (at least 10 characters)" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox text-[#262668]" />
                      <span className="text-[#666666] ml-2">Keep me signed in</span>
                    </label>
                    <Link href="/reset-password" className="text-[#5D5DFF] hover:text-[#D9D9D9] transition duration-150 ease-in-out">Forgot Password?</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-[#5D5DFF] hover:bg-[#38379C] w-full">Sign in</button>
                </div>
              </div>
            </form>
            <div className="text-[#666666] text-center mt-6">
              Don’t you have an account? <Link href="/signup" className="text-[#5D5DFF] hover:text-[#D9D9D9] transition duration-150 ease-in-out">Sign up</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
