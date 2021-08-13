import { NextApiRequest, NextApiResponse } from 'next'
import * as bcrypt from 'bcrypt'
import withDb from 'middleware/withDb'
import User from 'api/models/User'

import SECRET from '../../../next.config'

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const salt = bcrypt.genSaltSync(Number(SECRET))

    // eslint-disable-next-line no-console
    const user = await User.create({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt),
    })

    return res.status(200).send({ user })
  } catch (error) {
    return res.status(500).send(error)
  }
}

export default withDb(register)
