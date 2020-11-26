import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

export class UserUpdataDot {
  @ApiProperty({ description: '手机号' })
  @IsOptional()
  @IsPhoneNumber('cn', { message: '手机号码格式错误' })
  uname: string;

  @ApiProperty({ description: '密码' })
  password: string;

  @ApiProperty({ description: '身份' })
  identity: string;

  @ApiProperty({ description: '昵称' })
  name: string;

  @ApiProperty({ description: '邮箱' })
  @IsOptional()
  @IsEmail(
    {
      allow_display_name: true,
    },
    { message: '邮箱格式错误' },
  )
  email: string;

  @ApiProperty({ description: '微信号' })
  wx: string;
}
