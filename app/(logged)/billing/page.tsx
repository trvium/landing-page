import Billing from "@/components/billing";
import { getUser } from "@/utils/get-user";
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Billing - Trvium',
  description: 'Billing',
}

export default async function Dashboard() {
  const user = await getUser();

  if (!user) {
    redirect('/api/auth/login')
  } else {
    return (
      <>
        <Billing />
      </>
    )
  }

}
