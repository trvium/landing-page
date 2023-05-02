import axios from "axios";
import { cookies } from "next/headers";

export const getUser = async () => {
  const response = await axios.get(`${process.env.AUTH0_BASE_URL}/api/auth/me`, {
    headers: {
      cookie: `appSession=${cookies().get('appSession')?.value}`
    }
  })
  return response.data;
}
