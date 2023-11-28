import { PartialType } from '@nestjs/mapped-types';
import { CreateComplaintDto } from './create-book.dto';

export class UpdateComplaintDto extends PartialType(CreateComplaintDto) {
  static title: any;
  static author: any;
  static published: any;
}
