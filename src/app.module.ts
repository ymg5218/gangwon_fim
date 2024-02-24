import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsForSale } from './items_for_sale/entities/items_for_sale.entity';
import { ItemsForSaleModule } from './items_for_sale/items_for_sale.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "oracle",
      host: "localhost",
      port: 1030,
      username: 'YOUM',
      password: 'passwd',
      database: '강원식자재마트',
      sid: "XE",
      entities: [ItemsForSale],
      synchronize: true,
      logging: true,
    }),

    // Include the custom PostsModule for managing posts
    ItemsForSaleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
