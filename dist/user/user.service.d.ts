import { CreateUserDto } from './dto/create-user.dto';
import { FastifyReply } from 'fastify';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UserService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    register(reply: FastifyReply, createUserDto: CreateUserDto): Promise<void>;
    login(reply: FastifyReply, loginUserDto: LoginUserDto): Promise<void>;
    catchMessage(reply: FastifyReply, error: any): void;
}
