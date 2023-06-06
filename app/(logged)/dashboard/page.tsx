import ApiKey from "@/components/api-key";
import PlanInfo from "@/components/plan-info";
import RequestExample from "@/components/request-example";
import { getInfo } from "@/utils/get-info";
import { getToken } from "@/utils/get-token";
import { getUser } from "@/utils/get-user";
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Dashboard - Trvium',
  description: 'Dashboard',
}

export default async function Dashboard() {
  const user = await getUser();

  if (!user) {
    redirect('/api/auth/login')
  } else {
    const token = await getToken(user.email)
    const info = await getInfo(token)
    return (
      <section className="relative">
        <div className="flex justify-center">
          <div className="w-10/12 max-w-7xl mx-auto">
            <div className="flex gap-4 flex-col lg:flex-row mt-24">
              <div className="mt-4 lg:mt-0 w-full lg:w-2/5">
                <PlanInfo info={info} />
              </div>
              <div className="mt-4 lg:mt-0 w-full lg:w-3/5">
                <ApiKey info={info} />
                <RequestExample info={info}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
