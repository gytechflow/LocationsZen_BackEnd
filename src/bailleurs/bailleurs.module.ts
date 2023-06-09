import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Bailleur from './entities/bailleur.entity';
import { BailleursController } from './bailleurs.controller';
import { BailleursService } from './bailleurs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bailleur])],
  controllers: [BailleursController],
  providers: [BailleursService]
})
export class BailleursModule {}