import { Document } from 'mongoose';
import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Config extends Document {
  @Prop({
    type: Number,
    default: 19,
  })
  porcentajeIva: number;

  @Prop({
    type: Number,
    default: 2,
  })
  porcentajeInteresAhorros: number;

  @Prop({
    type: Number,
    default: 15,
  })
  porcentajeCreditoAnual: number;

  @Prop({
    type: Number,
    default: 4,
  })
  retencion: number;

  @Prop({
    type: Number,
    default: 13,
  })
  tasaInteresCdt: number;
}

const configSchema = SchemaFactory.createForClass(Config);

export default configSchema;
