import { Document, HydratedDocument } from 'mongoose';
import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { compareSync, hashSync } from 'bcrypt';

@Schema({
  timestamps: true,
  methods: {
    matchPassword(this: UserDocument, password: string) {
      return compareSync(password, this.password);
    },
  },
})
export class User extends Document {
  @Prop({
    type: String,
    required: true,
  })
  name: string;
  @Prop({
    type: String,
    required: true,
  })
  lastname: string;
  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  email: string;
  @Prop({
    type: String,
    select: false,
    required: true,
  })
  password: string;

  @Prop({
    type: String,
    enum: ['client', 'employee', 'admin'],
    default: 'client',
  })
  role: string;

  matchPassword: (password: string) => boolean;
}

type UserDocument = HydratedDocument<User>;

const userSchema = SchemaFactory.createForClass(User);

userSchema.pre('save', function () {
  this.password = hashSync(this.password, 10);
});

export default userSchema;
