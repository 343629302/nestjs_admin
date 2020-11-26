import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  HttpException,
  HttpStatus,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

async function bootstrap() {
  const options = new DocumentBuilder()
    .setTitle('微商城')
    .setDescription('后台端 + 管理端 + 小程序端')
    .setVersion('1.0')
    .build();
  const app = await NestFactory.create(AppModule);
  //全局管道配置
  app.useGlobalPipes(
    //使用数据验证
    new ValidationPipe({
      transform: true,
      exceptionFactory: (error: ValidationError[]) => {
        let message = '';
        if (error && error.length) {
          const messageArr = Object.values(error[0].constraints);
          message = messageArr[0];
        } else {
          message = '参数错误';
        }
        return new HttpException(message, HttpStatus.BAD_REQUEST);
      },
    }),
  );
  //添加全局前缀
  app.setGlobalPrefix('/api');
  const document = SwaggerModule.createDocument(app, options);
  //设置swagger
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
