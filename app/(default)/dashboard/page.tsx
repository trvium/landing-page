import ApiKey from "@/components/api-key";
import PlanInfo from "@/components/plan-info";
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
      <div className="flex">
        <PlanInfo info={info} />
        <ApiKey info={info} />
      </div>
    );
  }
}
