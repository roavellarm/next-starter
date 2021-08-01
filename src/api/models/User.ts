import { Schema, model } from 'mongoose'

const schema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    index: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
})

export default model('User', schema)
