import { NextApiRequest, NextApiResponse } from 'next'
// import bcrypt from 'bcrypt'
import withDb from 'middleware/withDb'
import User from 'api/models/User'

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
    })

    return res.status(200).send({ user })
  } catch (error) {
    return res.status(500).send(error)
  }
}

export default withDb(register)
