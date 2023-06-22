import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Locataire from './entities/locataire.entity';
import { LocatairesController } from './locataires.controller';
import { LocatairesService } from './locataires.service';

@Module({
  imports: [TypeOrmModule.forFeature([Locataire])],
  controllers: [LocatairesController],
  providers: [LocatairesService]
})
export class LocatairesModule {}