import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as oracledb from 'oracledb';
// import { oracleDbConfig } from './dbconfig';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))

  // try{
  //   oracledb.initOracleClient({ libDir: './instantclient_21_13'});
  // } catch (err){
  //   console.error('오라클 클라이언트 찾을 수 없음.');
  //   console.error(err);
  //   process.exit(1);
  // }

  // 오라클 접속
  // const connection = await oracledb.getConnection(oracleDbConfig);
  // let binds = {};
  // let options = {
  //   outFormat: oracledb.OUT_FORMAT_OBJECT,
  // };

  // 쿼리 실행
  // const quary = "select * from items_for_sale";
  // let result = await connection.execute(quary)

  // console.log("result : ", result);

  // 다른자원에서 접근할 수 있는 권한 부여
  app.enableCors();
  await app.listen(3000);

}
bootstrap();
