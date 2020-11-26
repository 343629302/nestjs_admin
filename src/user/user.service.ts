import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateDot } from './dot/user_create.dto';
import { UserUpdataDot } from './dot/user_updata.dto';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  //创建用户数据
  async created(userCreateDot: UserCreateDot) {
    const createdUser = new this.userModel(userCreateDot);
    return await createdUser.save();
  }

  //更新用户数据
  async update(id: string, userCreateDot: UserUpdataDot) {
    return await this.userModel.updateOne({ _id: id }, userCreateDot);
  }

  //查询全部用户
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
