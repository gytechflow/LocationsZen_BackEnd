import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Contrat from './entities/contrat.entity';
import { ContratsController } from './contrats.controller';
import { ContratsService } from './contrats.service';
import Locataire from './entities/locataire.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contrat, Locataire])],
  controllers: [ContratsController],
  providers: [ContratsService]
})
export class ContratsModule {}