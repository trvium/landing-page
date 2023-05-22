import axios from "axios";

export const getInfo = async (token: string) => {
  const response = await axios.get(`${process.env.AUTHORIZATION_URL}/info`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  return response.data;
}
