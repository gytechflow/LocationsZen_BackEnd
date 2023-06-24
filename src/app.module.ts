import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BailleursModule } from './bailleurs/bailleurs.module';
import { LocationsModule } from './locations/locations.module';
import { getEnvPath } from './common/helper/env.helper';
//import { TypeOrmConfigService } from './common/config/configuration';
import configuration from './common/config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';


const envFilePath: string = getEnvPath(`${process.cwd()}/src/common/envs`);
 
console.log("initialize app module")
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envFilePath,
    }),
    TypeOrmModule.forRootAsync({ 
      imports: [ConfigModule],
      useFactory: configuration,
      inject: [ConfigService], 
    }),
    BailleursModule,
    LocationsModule
  ],
})
export class AppModule {}
