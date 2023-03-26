import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';

@Schema({
  timestamps: true,
  methods: {
    setImg(this: AhorroDocument, secure_url: string, public_id: string) {
      this.imgUrl = secure_url;
      this.public_id = public_id;
    },
  },
})
export class CuentaAhorro extends Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  user: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: Number,
    // required: true
    default: 0,
  })
  founds: number;
  @Prop({
    type: String,
    default: null,
  })
  imgUrl: string;
  @Prop({
    type: String,
    required: true,
  })
  address: string;
  @Prop({
    type: Boolean,
    default: false,
  })
  isDisabled: boolean;
  @Prop({
    type: String,
    default: null,
  })
  public_id: string;
  @Prop({
    type: Boolean,
    default: false,
  })
  isBlocked: boolean;

  setImg: (secure_url: string, public_id: string) => void;
}

type AhorroDocument = HydratedDocument<CuentaAhorro>;

const ahorrosSchema = SchemaFactory.createForClass(CuentaAhorro);

export default ahorrosSchema;
