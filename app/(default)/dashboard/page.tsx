import ApiKey from "@/components/api-key";
import PlanInfo from "@/components/plan-info";
import { getUser } from "@/utils/get-user";
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Dashboard - Trvium',
  description: 'Dashboard',
}

export default async function Dashboard() {
  const user = await getUser();
  const userPlan = true;

  if (!user) {
    redirect('/api/auth/login')
  } else if (!userPlan) {
    redirect('/billing')
  } else {
    return (
      <>
        <PlanInfo />
        <ApiKey />
      </>
    )
  }

}
