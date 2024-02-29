import { Module } from '@nestjs/common';
import { ItemStorageService } from './item_storage.service';
import { ItemStorageController } from './item_storage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemStorage } from './entities/item_storage.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([ItemStorage])
  ],
  controllers: [ItemStorageController],
  providers: [ItemStorageService],
})
export class ItemStorageModule {}
