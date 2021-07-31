import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from 'middleware/mongodbutl'
import md5 from 'md5'

import User from './models/User'

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: md5(req.body.password),
    })

    return res.status(200).send({ user })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

export default connectDB(register)
