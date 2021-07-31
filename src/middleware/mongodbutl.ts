import mongoose from 'mongoose'

import { env } from '../../next.config'

const connectDB = (handler: any) => async (req: any, res: any) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res)
  }
  await mongoose.connect(String(env.DATABASE), {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  return handler(req, res)
}

export default connectDB
