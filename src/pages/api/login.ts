import User from 'api/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as bcrypt from 'bcrypt'
import withDb from 'middleware/withDb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { password, email } = req.body
    const user = await User.findOne({ email })

    if (!user) return res.status(404).send({ error: 'User not found' })

    const hashPassword = bcrypt.compareSync(password, user.password)

    if (!hashPassword) return res.send({ error: 'Invalid email and/or password' })

    return res.status(200).json({ user, token: 'Some generated token' })
  } catch (error) {
    return res.status(500).send(error)
  }
}

export default withDb(handler)
