import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { VerificationModule } from './modules/verification/verification.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { RedisModule } from './common/redis/redis.module';
import { SmsService } from './common/service/sms.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule, 
    VerificationModule, 
    PrismaModule, 
    RedisModule],
  providers: [SmsService],
})
export class AppModule {}