import { Injectable } from '@nestjs/common';
import { CreateComplaintDto } from './dto/create-book.dto';
import { UpdateComplaintDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BookDocument, book } from './schema/schema';
import { Model } from 'mongoose';


@Injectable()
export class BookService {

  constructor(@InjectModel(book.name) private bookModel : Model<BookDocument>){}

  create(createBookDto: CreateComplaintDto): Promise<book> {
    const model = new this.bookModel();
    model.title = CreateComplaintDto.title;
    model.author = CreateComplaintDto.author;
    model.published = CreateComplaintDto.published
    return model.save();
  }

  findAll() : Promise<book[]>{ 
    return this. bookModel.find().exec();
  }

  findOne(id: string): Promise<book>{
    return this. bookModel.findById(id).exec();
  }

  update(id: string, updateBookDto: UpdateComplaintDto) {
    return this. bookModel.updateOne({_id : id},
      { title : UpdateComplaintDto.title,
        author : UpdateComplaintDto.author,
        published : UpdateComplaintDto.published

      }).exec();
  }

  remove(id: string) {
    return this.bookModel.deleteOne({_id:id}).exec();
  }
}
