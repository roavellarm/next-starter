import { NextApiRequest, NextApiResponse } from 'next'
import md5 from 'md5'
import withDb from 'middleware/withDb'
import User from 'api/models/User'

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: md5(req.body.password + process.env.SALT_KEY),
    })

    return res.status(200).send({ user })
  } catch (error) {
    return res.status(500).send(error)
  }
}

export default withDb(register)
