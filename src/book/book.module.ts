import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { models } from 'mongoose';
import { BookSchema, book } from './schema/schema';
import { BookService } from './book.service';

@Module({
  imports : [MongooseModule.forFeature([{name : book.name , schema : BookSchema}])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
