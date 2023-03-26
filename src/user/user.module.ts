import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtStrategy } from './estrategy/jwt.estrategy';
import { MongooseModule } from '@nestjs/mongoose';
import userSchema, { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: userSchema,
      },
    ]),

    PassportModule.register({ defaultStrategy: 'jwt' }),

    JwtModule.register({
      secret: 'abc123',
      signOptions: { expiresIn: '6d' },
    }),
  ],
  exports: [JwtStrategy, PassportModule, JwtModule],
})
export class UserModule {}
