import { NextApiRequest, NextApiResponse } from 'next'
import withDb from 'middleware/withDb'
import User from 'api/models/User'
import { encryptPassword } from 'helpers/utils'

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body
    const user = await User.create({ email, password: encryptPassword(password) })

    return res.status(200).send({ user })
  } catch (error) {
    return res.status(500).send(error)
  }
}

export default withDb(register)
