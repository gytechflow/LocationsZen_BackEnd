import { Module } from '@nestjs/common';
import { LocatairesModule } from './locataires.module';
import { FacturesElectriciteModule } from './facturesElectricite.module';
import { FacturesBailModule } from './facturesBail.module';
import { ContratsModule } from './contrats.module';
import { ChambresModule } from './chambres.module';

@Module({
  imports: [
    LocatairesModule, 
    FacturesElectriciteModule,
    FacturesBailModule,
    ContratsModule,
    ChambresModule
  ],
})
export class LocationsModule {}