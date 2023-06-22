import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Contrat from './entities/contrat.entity';
import { ContratsController } from './contrats.controller';
import { ContratsService } from './contrats.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contrat])],
  controllers: [ContratsController],
  providers: [ContratsService]
})
export class ContratsModule {}