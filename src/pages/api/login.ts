import User from 'api/models/User'
import { verifyPassword } from 'helpers/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = req.body

    const user = await User.findOne(email)

    const isCorrectPassword = verifyPassword(password, user.password)

    if (!isCorrectPassword)
      return res.status(404).send({ message: 'Incorrect email and/or password' })

    return res.status(200).json(req.body.email)
  } catch (error) {
    return res.status(500).send(error)
  }
}
