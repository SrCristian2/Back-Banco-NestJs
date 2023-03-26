import { validRoles } from '../interfaces/valid-roles';
import { SetMetadata } from '@nestjs/common';

export const RoleProtected = (...args: validRoles[]) => {
  return SetMetadata('roles', args);
};
