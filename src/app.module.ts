import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BailleursModule } from './bailleurs/bailleurs.module';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './common/config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';


const envFilePath: string = getEnvPath(`${process.cwd()}/common/envs`);
console.log(envFilePath)

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envFilePath,
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    BailleursModule,
  ],
})
export class AppModule {}
