import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Transferencias extends Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  })
  cuentaOrigen: mongoose.Schema.Types.ObjectId;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  })
  cuentaDestino: mongoose.Schema.Types.ObjectId;
  @Prop({
    type: Number,
    required: true,
  })
  monto: number;
}

const transferenciaSchema = SchemaFactory.createForClass(Transferencias);

export default transferenciaSchema;
