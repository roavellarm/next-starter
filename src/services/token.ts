import jwt from 'jsonwebtoken'

export async function generateToken(data: any) {
  const token = await jwt.sign({ data }, `${process.env.SECRET}`, {
    expiresIn: '1d',
  })

  return token
}

// export async function decodeToken(token: any) {
//   return jwt.decode({token, `${process.env.SECRET}`})
// }

export function verifyToken(token: any) {
  return jwt.verify(token, `${process.env.SECRET}`, (error: any, decode: any) => {
    if (error) return { error }
    return { decode }
  })
}
