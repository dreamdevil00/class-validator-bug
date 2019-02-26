import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation https://docs.nestjs.com/techniques/validation
  const isProduction = process.env.NODE_ENV === 'production';
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: isProduction, // 生产环境下移除校验错误详细信息
      whitelist: true, // 只接受白名单属性
      // transform: true // 将 payload 转换为相应的 DTO 类
    }),
  );

  // OpenAPI(Swagger) https://docs.nestjs.com/recipes/swagger
  const options = new DocumentBuilder()
    .setTitle('NestZero')
    .setDescription('NestZero API 描述')
    .setVersion('0.0')
    .addTag('TagName')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, () => {
    // tslint:disable
    console.log(`Server listening at port 3000`);
  });
}
bootstrap();
