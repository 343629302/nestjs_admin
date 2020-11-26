import { Document } from 'mongoose';
export interface User extends Document {
  readonly usname: string;
  readonly password: string;
  readonly identity: string;
  readonly store: string;
  readonly wx: string;
  readonly email: string;
  readonly name: string;
}
