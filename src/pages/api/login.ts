import User from 'api/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as bcrypt from 'bcrypt'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await User.findOne(req.body.email)

  const hashPassword = bcrypt.compareSync(req.body.password, data.password) // true
  if (!hashPassword) {
    res.send({ msg: 'Senha invalida' })
  }

  res.status(200).json(req.body.email)
}
