import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsForSaleModule } from './items_for_sale/items_for_sale.module';
import { ItemsForSale } from './items_for_sale/entities/items_for_sale.entity';
import { ItemImageModule } from './item_image/item_image.module';
import { ItemStorageModule } from './item_storage/item_storage.module';
import { ItemStorage } from './item_storage/entities/item_storage.entity';
import { TopCategoriesModule } from './top_categories/top_categories.module';
import { DetailedCategoriesModule } from './detailed_categories/detailed_categories.module';
import { EventItemsModule } from './event_items/event_items.module';
import { MemberModule } from './member/member.module';
import { ShoppingBasketModule } from './shopping_basket/shopping_basket.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { PurchaseRecordModule } from './purchase_record/purchase_record.module';
import { DetailedPurchaseRecordModule } from './detailed_purchase_record/detailed_purchase_record.module';
import { DeliveryRecordModule } from './delivery_record/delivery_record.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "oracle",
      host: "localhost",
      port: 1521,
      username: 'YOUM',
      password: 'passwd',
      database: '강원식자재마트',
      sid: "XE",
      entities: [
        ItemsForSale,
        ItemStorage],
      synchronize: true,
      logging: true,
    }),

    // Include the custom PostsModule for managing posts
    ItemsForSaleModule,

    ItemImageModule,

    ItemStorageModule,

    TopCategoriesModule,

    DetailedCategoriesModule,

    EventItemsModule,

    MemberModule,

    ShoppingBasketModule,

    WishlistModule,

    PurchaseRecordModule,

    DetailedPurchaseRecordModule,

    DeliveryRecordModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
