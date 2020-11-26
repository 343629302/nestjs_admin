import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserCreateDot } from './dot/user_create.dto';
import { UserUpdataDot } from './dot/user_updata.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('后台端用户')
export class UserController {
  constructor(private readonly uesrService: UserService) {}

  @Get('/login')
  @ApiOperation({ summary: '用户登陆' })
  async login() {
    console.log('登录');
    return {
      status: 200,
    };
  }

  @Get('/list')
  @ApiOperation({ summary: '用户列表' })
  async list() {
    const res = await this.uesrService.findAll();
    return {
      status: 200,
      res,
    };
  }

  @Post('/create')
  @ApiOperation({ summary: '创建管理员' })
  async create(@Body() body: UserCreateDot) {
    const res = await this.uesrService.created(
      Object.assign({}, body, {
        identity: 'admin',
      }),
    );
    return res;
  }

  @Put('/updata')
  @ApiOperation({ summary: '更新用户' })
  async updata(@Body() body: UserUpdataDot) {
    const res = await this.uesrService.update('5fbf560599f7bc0dc0b18250', body);
    console.log(res);
    return res;
  }
}
