import { getUser } from "@/utils/get-user";
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Dashboard - Trvium',
  description: 'Dashboard',
}

export default async function SignIn() {
  const user = await getUser();

  if (!user) {
    redirect('/api/auth/login')
  } else {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">Dashboard</h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-red-100 hover:bg-red-200 w-full mb-4 sm:w-auto sm:mb-0 px-3 py-2 items-center rounded-md" href="/api/auth/logout">Logout</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }

}
