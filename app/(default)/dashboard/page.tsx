import ApiKey from "@/components/api-key";
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
    return (
      <>
        <ApiKey />
      </>
    )
  }

}
