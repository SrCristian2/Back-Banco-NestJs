import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Estadistica extends Document {
  @Prop({
    type: Number,
    default: 0,
  })
  cuentasBancarias: number;

  @Prop({
    type: Number,
    default: 0,
  })
  ahorrosTotales: number;

  @Prop({
    type: Number,
    default: 0,
  })
  cuentasBloqueadas: number;

  @Prop({
    type: Number,
    default: 0,
  })
  gananciasTotales: number;

  @Prop({
    type: Number,
    default: 0,
  })
  creditos: number;

  @Prop({
    type: Number,
    default: 0,
  })
  cuentasDeshabilitadas: number;
}

const estadisticaSchema = SchemaFactory.createForClass(Estadistica);

export default estadisticaSchema;
