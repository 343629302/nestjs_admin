import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  MinLength,
} from 'class-validator';

export class UserCreateDot {
  @ApiProperty({ description: '手机号' })
  @IsNotEmpty({ message: '请输入手机号' })
  @IsOptional()
  @IsPhoneNumber('cn', { message: '手机号码格式错误' })
  uname: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '请输入密码' })
  @IsOptional()
  @MinLength(6, { message: '密码不能少于6位数' })
  password: string;

  @ApiProperty({ description: '身份' })
  identity: string;

  @ApiProperty({ description: '商店' })
  store: number;

  @ApiProperty({ description: '昵称' })
  name: string;

  @ApiProperty({ description: '邮箱' })
  email: string;

  @ApiProperty({ description: '微信号' })
  wx: string;
}
