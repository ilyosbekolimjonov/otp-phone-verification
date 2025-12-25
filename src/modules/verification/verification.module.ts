import { Module } from '@nestjs/common';
import { VerificationController } from './verification.controller';
import { VerificationService } from './verification.service';
import { RedisModule } from 'src/common/redis/redis.module';
import { SmsService } from 'src/common/service/sms.service';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [RedisModule, PrismaModule],
  controllers: [VerificationController],
  providers: [VerificationService, SmsService],
})
export class VerificationModule {}