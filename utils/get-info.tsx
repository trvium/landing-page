import axios from "axios";

export const getInfo = async (token: string) => {
  const response = await axios.get(`${process.env.AUTHORIZATION_URL}/info`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const info = {
    authUrl: process.env.AUTHORIZATION_URL,
    planType: response.data.plan_type,
    planLimit: response.data.plan_limit,
    planUsed: response.data.plan_used,
    apiKey: response.data.api_key
  }
  return info;
}
