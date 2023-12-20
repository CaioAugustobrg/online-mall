import { Module } from '@nestjs/common';
import { AuthController } from './auth.controllers';

@Module({
  controllers: [AuthController],
})
export class AuthModule {}
