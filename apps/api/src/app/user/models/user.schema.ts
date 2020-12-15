import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../../enums/role.enum';


@Schema()
export class User extends Document  {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop({ unique: true })
    username: string;

    @Prop({ unique: true })
    email: string;

    @Prop()
    password: string;

    @Prop()
    phone: string;

    @Prop()
    address: string;

    @Prop({default: Role.User})
    roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User)
