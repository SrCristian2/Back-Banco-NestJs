import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Pagos extends Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'credit',
    required: true,
  })
  credit: mongoose.Schema.Types.ObjectId;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ahorros',
  })
  ahorros?: mongoose.Schema.Types.ObjectId;
  @Prop({
    type: Number,
    required: true,
  })
  cuotas: number;
  @Prop({
    type: Number,
    required: true,
  })
  monto: number;
}

const pagosSchema = SchemaFactory.createForClass(Pagos);

export default pagosSchema;
