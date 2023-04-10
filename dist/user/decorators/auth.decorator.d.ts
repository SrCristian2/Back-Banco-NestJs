import { validRoles } from '../interfaces/valid-roles';
export declare function Auth(...roles: validRoles[]): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
