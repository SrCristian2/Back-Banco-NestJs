import mongoose, { Document } from 'mongoose';
import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Cdt extends Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  })
  client: mongoose.Schema.Types.ObjectId;
  @Prop({
    type: String,
    required: true,
  })
  nameBeneficiary: string;

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
    type: String,
    required: true,
  })
  contact: string;
  @Prop({
    type: Number,
    min: 0,
    max: 747,
  })
  PlazoDias: number;
  @Prop({
    type: Number,
    default: 0,
  })
  montoDeposito: number;
  @Prop({
    type: Number,
    default: 0,
  })
  totalGanancia: number;
  @Prop({
    type: Number,
    default: 0,
  })
  gananciaTotal: number;
}

// type CdtDocument = HydratedDocument<Cdt>;

const cdtSchema = SchemaFactory.createForClass(Cdt);

export default cdtSchema;
