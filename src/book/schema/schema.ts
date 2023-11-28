import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BookDocument = book & Document;

@Schema()
export class book{
    @Prop()
    title : string;

    @Prop()
    author : string;

    @Prop()
    published : number;
}
export const BookSchema = SchemaFactory.createForClass(book)