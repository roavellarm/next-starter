import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import connectDB from 'services/connectDB'

const withDb =
  (callback: any) => async (req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) => {
    try {
      const token = req.headers['x-access-token']

      await connectDB()
      return callback(req, res, { next, token })
    } catch (error) {
      return res.send(error)
    }
  }

export default withDb
