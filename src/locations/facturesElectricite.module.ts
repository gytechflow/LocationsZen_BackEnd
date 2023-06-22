import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import FactureElectricite from './entities/factureELectricite.entity';
import { FacturesElectriciteController } from './facturesElectricite.controller';
import { FacturesElectriciteService } from './facturesElectricite.service';

@Module({
  imports: [TypeOrmModule.forFeature([FactureElectricite])],
  controllers: [FacturesElectriciteController],
  providers: [FacturesElectriciteService]
})
export class FacturesElectriciteModule {}