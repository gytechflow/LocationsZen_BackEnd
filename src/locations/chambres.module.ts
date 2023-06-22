import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Chambre from './entities/chambre.entity';
import { ChambresController } from './chambres.controller';
import { ChambresService } from './chambres.service';

@Module({
  imports: [TypeOrmModule.forFeature([Chambre])],
  controllers: [ChambresController],
  providers: [ChambresService]
})
export class ChambresModule {}