import jwt from 'jsonwebtoken'

export const getToken = async (email: string) => {
  const jwtSecret = process.env.JWT_SECRET
  if (!jwtSecret) throw new Error('JWT_SECRET is not defined')

  const token = jwt.sign({ email }, jwtSecret, { expiresIn: '1h' })
  return token
}
