import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Bailleur from './entities/factureBail.entity';
import { FacturesBailController } from './facturesBail.controller';
import { FacturesBailService } from './facturesBail.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bailleur])],
  controllers: [FacturesBailController],
  providers: [FacturesBailService]
})
export class FacturesBailModule {}