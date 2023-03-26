import { Reflector } from '@nestjs/core';
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext } from '@nestjs/common';
import {
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common/exceptions';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const canActivate = super.canActivate(context);
    if (!canActivate) {
      return false;
    }

    const validRoles = this.reflector.get('roles', context.getHandler());

    if (!validRoles) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const user = req.user;

    if (!user) {
      throw new BadRequestException({
        ok: false,
        data: '',
        message: 'User not found',
      });
    }

    //verificar si el usuario tiene el rol que se pide en el endpoint

    for (const role of validRoles) {
      if (user.role === role) {
        return true;
      }
    }

    throw new ForbiddenException({
      ok: false,
      data: '',
      message: `User ${user.name} need a valid role ${validRoles}`,
    });
  }
}
