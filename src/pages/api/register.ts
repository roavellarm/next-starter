import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = {
    email: req.body.email || '',
    name: 'Foo Bar',
  }

  res.status(200).json(user)
}
