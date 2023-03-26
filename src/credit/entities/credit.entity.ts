import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Credit extends Document {
  @Prop({
    type: String,
    required: true,
  })
  product: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  })
  client: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: String,
    required: true,
  })
  fiador: string;

  @Prop([
    {
      secure_url: { type: String },
      public_id: { type: String },
    },
  ])
  images?: {
    secure_url: string;
    public_id: string;
  }[];

  @Prop({
    type: Number,
    default: 0,
  })
  totalIntereses: number;
  @Prop({
    type: Number,
    default: 0,
  })
  cuotas: number;
  @Prop({
    type: Number,
    default: 0,
  })
  totalAPagarCadaCuota: number;
  @Prop({
    type: Number,
    default: 0,
  })
  montoAPagar: number;
}

const creditSchema = SchemaFactory.createForClass(Credit);

export default creditSchema;
