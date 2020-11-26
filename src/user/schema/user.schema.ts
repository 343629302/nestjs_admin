import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  uname: String,
  password: String,
  identity: String,
  store: {
    type: String,
    default: '',
  },
  wx: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
});
