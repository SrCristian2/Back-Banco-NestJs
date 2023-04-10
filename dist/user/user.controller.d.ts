import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { FastifyReply } from 'fastify';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(reply: FastifyReply, createUserDto: CreateUserDto): Promise<void>;
    login(reply: FastifyReply, loginUserDto: LoginUserDto): Promise<void>;
}
