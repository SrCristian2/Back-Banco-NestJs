import { FastifyReply } from 'fastify';
export declare function response<T>(reply: FastifyReply, statusCode: number, ok: boolean, data: T, message: string): void;
