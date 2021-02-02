import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  password: number;

  @Prop()
  email: string;

  @Prop()
  isValid: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
